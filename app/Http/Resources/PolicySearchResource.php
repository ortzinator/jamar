<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PolicySearchResource extends JsonResource
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
