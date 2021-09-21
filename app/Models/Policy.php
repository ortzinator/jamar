<?php

namespace App\Models;

use App\Casts\MoneyIntegerCast;
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
        'premium' => MoneyIntegerCast::class . ':currency'
    ];

    public function scopeFilter($query, array $filters)
    {
        $query
            ->when($filters['search'] ?? null, function ($query, $search) {
                $query
                    ->where(function ($query) use ($search) {
                        $query->where('number', 'like', '%' . $search . '%');
                        $query->orWhere('fields', 'like', '%' . $search . '%');
                    })
                    ->orWhereHas('contacts', function ($query) use ($search) {
                        $query->where('name', 'like', '%' . $search . '%');
                    });
            })
            ->when($filters['trashed'] ?? null, function ($query, $trashed) {
                if ($trashed === 'with') {
                    $query->withTrashed();
                } elseif ($trashed === 'only') {
                    $query->onlyTrashed();
                }
            });
    }

    public function contacts()
    {
        return $this->belongsToMany(Contact::class)->withTimestamps();
    }

    public function agent()
    {
        return $this->belongsTo(User::class, 'agent_id');
    }

    public function cacheKey()
    {
        return sprintf(
            '%s/%s-%s',
            $this->getTable(),
            $this->getKey(),
            $this->updated_at->timestamp
        );
    }

    public function getContactNamesPreviewAttribute()
    {
        return Cache::remember(
            $this->cacheKey() . ':contact_names',
            15,
            function () {
                return Str::limit($this->contacts->implode('name', ', '), 100);
            }
        );
    }

    /**
     * @param int $contactId The ID of the Contact you want to attach
     *
     * @return void
     */
    public function attachContact($contactId)
    {
        $this->contacts()->attach($contactId);
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
