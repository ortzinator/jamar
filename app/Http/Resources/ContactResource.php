<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\Contact */
class ContactResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $this->loadMissing('policies');
        return [
            'name' => $this->name,
            'address' => $this->address,
            'notes' => $this->notes,
            'id' => $this->id,
            'deleted_at' => $this->deleted_at,
            'link' => $this->link,
            'policies' => $this->policies,
        ];
    }
}
