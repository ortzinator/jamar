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
        // return Gate::allows('create', new \App\Models\Policy);
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
            'period_start' => ['required'],
            'period_end' => ['required'],
            'agent_id' => ['required'],
            'holders' => ['required']
        ];
    }
}
