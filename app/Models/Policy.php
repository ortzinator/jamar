<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;

class Policy extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $guarded = [];

    protected $casts = [
        'fields' => 'array',
        'period_start' => 'datetime',
        'period_end' => 'datetime',
    ];

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('number', 'like', '%'.$search.'%');
                $query->orWhere('fields', 'like', '%'.$search.'%');
            });
        })->when($filters['trashed'] ?? null, function ($query, $trashed) {
            if ($trashed === 'with') {
                $query->withTrashed();
            } elseif ($trashed === 'only') {
                $query->onlyTrashed();
            }
        });
    }

    public function holders()
    {
        return $this->belongsToMany(Holder::class)->withTimestamps();
    }

    public function cacheKey()
    {
        return sprintf(
            "%s/%s-%s",
            $this->getTable(),
            $this->getKey(),
            $this->updated_at->timestamp
        );
    }

    public function getHolderNamesPreviewAttribute()
    {
        return Cache::remember($this->cacheKey() . ':holder_names', 15, function() {
            return Str::limit($this->holders->implode('name', ', '), 100);
        });
    }

    /**
     * @param int $holderId The ID of the Holder you want to attach
     * 
     * @return void
     */
    public function attachHolder($holderId)
    {
        $this->holders()->attach($holderId);
    }

    public function resolveRouteBinding($id, $field = null)
    {
        return $this->withTrashed()->findOrFail($id);
    }

    public function scopeExpired(Builder $query)
    {
        $query->whereDate('period_end', '<', now());
    }

    public function scopeExpiringSoon(Builder $query)
    {
        $query->whereDate('period_end', '<', now()->addDays(7));
    }

    public function cancel()
    {
        $this->update(['cancelled_at' => now()]);
    }

    public function isCancelled()
    {
        return $this->cancelled_at != null;
    }

    public function scopeCancelled($query)
    {
        $query->whereNotNull('cancelled_at');
    }
}
