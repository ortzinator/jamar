<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePolicyReqest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'number' => ['sometimes', 'required'],
            'fields' => ['sometimes', 'array'],
            'fields.*.name' => ['required'],
            'period_start' => ['sometimes', 'required', 'date'],
            'period_end' => ['sometimes', 'required', 'date'],
            'contacts' => ['sometimes'],
            'agent_id' => ['sometimes', 'exists:users,id'],
            'premium' => ['sometimes', 'required', 'numeric']
        ];
    }
}
