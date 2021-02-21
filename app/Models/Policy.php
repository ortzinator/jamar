<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Policy extends Model
{
    use HasFactory;

    public function holders()
    {
        return $this->belongsToMany(Holder::class)->withTimestamps();
    }
}
