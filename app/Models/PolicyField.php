<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PolicyField extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'is_protected' => 'boolean',
    ];

    public function policy()
    {
        return $this->belongsTo(Policy::class);
    }
}
