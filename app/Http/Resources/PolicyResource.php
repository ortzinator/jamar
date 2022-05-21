<?php

namespace App\Http\Resources;

use Cknow\Money\Money;
use Illuminate\Http\Resources\Json\JsonResource;

class PolicyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $premium = $this->premium->toArray();
        $premium = array_merge($premium, [
            'subunit' => Money::getCurrencies()->subunitFor($this->premium->getCurrency())
        ]);

        return [
            'number' => $this->number,
            'period_start' => $this->period_start,
            'period_end' => $this->period_end,
            'agent_id' => $this->agent_id,
            'premium' => $premium,
            'contacts' => ContactResource::collection($this->contacts),
            'created_at' => $this->created_at,
            'id' => $this->id
        ];
    }
}
