<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Test;
use App\Http\Requests\TestCreateRequest;
use App\Http\Requests\TestUpdateRequest;
use App\Models\Category;

class TestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {   
        $tests = Test::withCount('questions')->with('questions');
        if(request()->get('title')){
            $tests = $tests->where('title', 'LIKE', "%".request()->get('title')."%");
        };
        if(request()->get('status')){
            $tests = $tests->where('status',request()->get('status'));
        };
        $tests = $tests->paginate(5);
        
        return view('admin.test.list', compact('tests'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.test.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TestCreateRequest $request)
    {
        $category = Category::where(['name' => $request->category, 'level' => $request->level])->first();
        $test = Test::create([
            'title' => $request->title,
            'category_id' => $category->id,
            'finished_at' => now()->format('Y-m-d H:i:s')
        ]);
        return redirect()->route('tests.index')->withSuccess('テストが正常に作成されました');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {   
        $test = Test::with('topTen.user')->withCount('questions')->find($id) ?? abort(404,'テストが見つかりません');
        
        return view('admin.test.show', compact('test'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {   
        $test = Test::withCount('questions')->find($id) ?? abort(404, 'テストが見つかりません');
        return view('admin.test.edit', compact('test'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(TestUpdateRequest $request, $id)
    {
        $Test = Test::find($id) ?? abort(404, 'Test Bulunamadı');
        Test::find($id)->update($request->except(['_method','_token']));

        return redirect()->route('Testzes.index')->withSuccess('Test güncelleme işlemi başarıyla gerçekleşti.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $Test = Test::find($id) ?? abort(404, 'テストが見つかりません');
        $Test->delete();
        return redirect()->route('test.index')->withSuccess('テスト削除が正常に完了しました!');
    }
}
