<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Questions;
use App\Models\Category;
use App\Models\Test;
use App\Http\Requests\QuestionCreateRequest;
use App\Http\Requests\QuestionUpdateRequest;
use Illuminate\Support\Str;


class QuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {   
        $test = Test::whereId($id)->with('questions')->first();
        $category = Category::find($test->category_id);
        return view('admin.question.list', compact('test', 'category'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($id)
    {   
        $test = Test::find($id);
        return view('admin.question.create', compact('test'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(QuestionCreateRequest $request, $id)
    {   
        if($request->hasFile('image')){
            $fileName = Str::slug($request->question).'.'.$request->image->extension();
            $fileNameWithUpload = 'uploads/'.$fileName;
            $request->image->move(public_path('uploads'), $fileName);
            $request->merge([
                'image' => $fileNameWithUpload
            ]);
        }
        Test::find($id)->questions()->create($request->post());
        return redirect()->route('questions.index', $id)->withSuccess('質問が正常に作成されました。');
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($Test_id,$id)
    {
        return $Test_id.' - '.$id;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($Test_id,$question_id)
    {
        $question = Test::find($Test_id)->questions()->whereId($question_id)->first() ?? abort(404, 'Test veya Soru Bulunamadı');
        return view('admin.question.edit', compact('question'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(QuestionUpdateRequest $request, $Test_id, $question_id)
    {
        if($request->hasFile('image')){
            $fileName = Str::slug($request->question).'.'.$request->image->extension();
            $fileNameWithUpload = 'uploads/'.$fileName;
            $request->image->move(public_path('uploads'), $fileName);
            $request->merge([
                'image' => $fileNameWithUpload
            ]);
        }
        Test::find($Test_id)->questions()->whereId($question_id)->first()->update($request->post());
        return redirect()->route('questions.index', $Test_id)->withSuccess('質問は正常に編集されました。');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($test_id, $question_id)
    {
        Test::find($test_id)->questions()->whereId($question_id)->delete();
        return redirect()->route('questions.index', $test_id)->withSuccess('質問が正常に削除されました。');
    }
}
