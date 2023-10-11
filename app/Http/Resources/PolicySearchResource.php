<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\Policy */
class PolicySearchResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'number' => $this->number,
            'period_end' => $this->period_end,
            'premium' => array_merge($this->premium->toArray(), [
                'subunit' => $this->subunits
            ]),
            'contacts' => ContactResource::collection($this->contacts),
            'created_at' => $this->created_at,
            'id' => $this->id,
            'contactNamesPreview' => $this->contactNamesPreview
        ];
    }
}
