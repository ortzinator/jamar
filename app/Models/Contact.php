<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Contact extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $guarded = [];

    protected $appends = ['link'];

    protected $hidden = ['pivot'];

    protected $withCount = ['policies'];

    public function policies()
    {
        return $this->belongsToMany(Policy::class)->withTimestamps();
    }

    public function getLinkAttribute()
    {
        return url("/contacts/{$this->id}/edit");
    }

    public function scopeFilter($query, array $filters)
    {
        $query
            ->when($filters['search'] ?? null, function ($query, $search) {
                $query->where(function ($query) use ($search) {
                    $query
                        ->where('name', 'like', '%' . $search . '%')
                        ->orWhere('address', 'like', '%' . $search . '%');
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

    public function resolveRouteBinding($id, $field = null)
    {
        return $this->withTrashed()->findOrFail($id);
    }
}
