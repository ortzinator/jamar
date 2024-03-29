<?php

namespace App\Models;

use Cknow\Money\Casts\MoneyIntegerCast;
use Cknow\Money\Money;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

/**
 * App\Models\Policy
 *
 * @property mixed $id
 * @property string $subunits
 * @property string $contactNamesPreview
 * @property mixed $created_at
 * @property \Illuminate\Support\Carbon|null $cancelled_at
 * @property Money|null $premium
 * @property \Illuminate\Support\Carbon|null $updated_at
 */
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

    protected static function booted()
    {
        static::created(function (Policy $policy) {
            $policy->history()->create([
                'event_type' => 'policy_created',
                'policy_id' => $policy->id,
                'user_id' => Auth::id() ?? 1
            ]);
        });
        static::updated(function (Policy $policy) {
            $policy->history()->create([
                'event_type' => 'policy_updated',
                'policy_id' => $policy->id,
                'user_id' => Auth::id() ?? 1
            ]);
        });
    }

    public function scopeFilter(Builder $query, array $filters): void
    {
        $query
            ->when($filters['search'] ?? null, function ($query, $search) {
                $search = $search . '%';
                $query->where(function ($query) use ($search) {
                    $query
                        ->where('number', 'like', $search)
                        ->orWhere('fields', 'like', '%' . $search)
                        ->orWhereHas('contacts', function ($query) use ($search) {
                            $query->where('name', 'like', $search);
                        });
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

    public function contacts(): BelongsToMany
    {
        return $this->belongsToMany(Contact::class)->withTimestamps();
    }

    public function agent(): BelongsTo
    {
        return $this->belongsTo(User::class, 'agent_id');
    }

    public function history(): HasMany
    {
        return $this->hasMany(History::class);
    }

    public function cacheKey(): string
    {
        return sprintf(
            '%s/%s-%s',
            $this->getTable(),
            $this->getKey(),
            $this->updated_at->timestamp
        );
    }

    protected function contactNamesPreview(): Attribute
    {
        return Attribute::make(
            get: fn() => Str::limit($this->contacts->implode('name', ', '), 100)
        )->shouldCache();
    }

    /**
     * @param  int  $contactId  The ID of the Contact you want to attach
     *
     * @return void
     */
    public function attachContact(int $contactId): void
    {
        $this->contacts()->attach($contactId);
    }

    public function resolveRouteBinding($id, $field = null): Policy
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

    protected function subunits(): Attribute
    {
        return Attribute::make(
            get: fn() => Money::getCurrencies()->subunitFor($this->premium->getCurrency())
        )->shouldCache();
    }
}
