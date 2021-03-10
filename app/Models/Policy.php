<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Policy extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $with = ['fields', 'holders'];

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
}
