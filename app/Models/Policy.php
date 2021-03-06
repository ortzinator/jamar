<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Policy extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $with = ['fields'];

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
