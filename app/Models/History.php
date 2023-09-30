<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class History extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'created_at' => 'datetime:m-d-Y H:i'
    ];

    protected $appends = ['user_name'];

    protected $with = ['user'];

    public function getUserNameAttribute()
    {
        return $this->user->name;
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
