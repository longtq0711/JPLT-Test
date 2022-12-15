<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GetTestListRequest extends FormRequest
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
            'name' => 'required',
            'level' => 'required',

        ];
    }
    // public function attributes()
    // {
    //     return [
    //         'question' => '質問',
    //         'image' => '質問写真',
    //         'answer1' => '1. 回答',
    //         'answer2' => '2. 回答',
    //         'answer3' => '3. 回答',
    //         'answer4' => '4. 回答',
    //         'correct_answer' => '正解',

    //     ];
    // }
}