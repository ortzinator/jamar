<?php

namespace App\Models;

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

    protected $appends = ['holderNamesPreview'];

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('number', 'like', '%'.$search.'%');
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
     * @param array $field
     * 
     * @return PolicyField
     */
    public function addField($field)
    {
        return $this->fields()->create($field);
    }

    public function fields()
    {
        return $this->hasMany(PolicyField::class);
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
}
