<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Test;
use App\Models\Category;

class TypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {   
        $categories = Category::where('type', '!=', ' ')->orderBy('id', 'DESC')->paginate(5);
        
        return view('admin.type.list', compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.type.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $category = Category::create([
            'name' => $request->name,
            'level' => $request->level,
            'type' => $request->type
        ]);
        return redirect()->route('types.index')->withSuccess('大門が正常に作成されました');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {   
        $category = Category::find($id) ?? abort(404,'大門が見つかりません');
        
        return view('admin.type.show', compact('category'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {   
        $category = Category::find($id) ?? abort(404, '大門が見つかりません');
        return view('admin.type.edit', compact('category'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $category = Category::find($id) ?? abort(404, '大門が見つかりません');
        $category->update($request->except(['_method','_token']));

        return redirect()->route('types.edit', $category->id)->withSuccess('大門が正常に編集されました');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $category = Category::find($id) ?? abort(404, '大門が見つかりません');
        $category->delete();
        return redirect()->route('types.index')->withSuccess('大門削除が正常に完了しました!');
    }

    public function get_type(Request $request)
    {
        $name = $request->name;
        $level = $request->level;
        $categories = Category::where(['name' => $name, 'level' => $level])->get();
        if ($categories) {
            return response()->json([
                'status' => 200,
                'message' => __('Successful'),
                'categories' => $categories,
            ]);
        }

        return response()->json([
            'status' => 400,
            'message' => __('Bad request'),
        ]);
    }
}
