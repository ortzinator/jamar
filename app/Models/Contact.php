<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * App\Models\Contact
 *
 * @property mixed $id
 * @property string $link
 */
class Contact extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $guarded = [];

    protected $hidden = ['pivot'];

    protected $withCount = ['policies'];

    public function policies(): BelongsToMany
    {
        return $this->belongsToMany(Policy::class)->withTimestamps();
    }

    public function link(): Attribute
    {
        return Attribute::make(
            get: fn() => url("/contacts/{$this->id}/edit"),
        );
    }

    public function scopeFilter($query, array $filters): void
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

    public function resolveRouteBinding($id, $field = null): Contact
    {
        return $this->withTrashed()->findOrFail($id);
    }
}
