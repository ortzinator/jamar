<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;

class CreatePolicyRequest extends FormRequest
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
            'number' => ['required'],
            'fields.*.name' => ['required'],
            'period_start' => ['required', 'date'],
            'period_end' => ['required', 'date'],
            'agent_id' => ['required', 'exists:users,id'],
            'contacts' => ['required'],
            'premium' => ['required', 'integer']
        ];
    }

    public function messages()
    {
        return [
            'contacts.required' => 'At least one policyholder must be added'
        ];
    }
}
