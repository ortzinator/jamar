<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ContactResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'name' => $this->name,
            'address' => $this->address,
            'notes' => $this->notes,
            'id' => $this->id,
            'deleted_at' => $this->deleted_at,
            'link' => $this->link,
            'policies' => $this->loadMissing(['policies'])
        ];
    }
}
