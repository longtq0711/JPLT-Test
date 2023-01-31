<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Support\Facades\DB;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Exception;

class UserController extends Controller
{
    protected $user;

    public function __construct()
    {
        $this->user = new User();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = $this->user->orderBy('id', 'desc');

        if ($request->has('keyword')) {
            $query = $query->where(function ($q) use ($request) {
                $q->where('fullname', 'like', '%'.$request->keyword.'%')
                    ->orWhere('email', 'like', '%'.$request->keyword.'%');
            });
        }

        $paginates = $query->paginate(10);

        return view('admin.users.index', compact('paginates'));
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return view('admin.users.show', compact('user'));
    }

        /**
     * Show the form for editing the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        return view('admin.users.create');
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        return view('admin.users.edit')->with('dataEdit', $user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function update(User $user, Request $request)
    {

        try {
            DB::beginTransaction();

            $formData = $request->all();
            $user->update($formData);

            DB::commit();

            return redirect()->route('admin.users.edit', $user->id)->with('success', __('ユーザが正常に編集されました。'));
        } catch (Exception $e) {
            DB::rollback();

            return redirect()->route('admin.users.edit', $user->id)->with('error', __('ユーザが編集できませんでした。'));
        }
    }

    public function store(Request $request){
        // try {
            $data = $request->all();
            $data['password'] = bcrypt('password');
            $user = User::create($data);
            return redirect()->route('admin.users.edit', $user->id)->with('success', __('ユーザが正常に作成されました。'));
        // } catch(\Exception $e) {
        //     return redirect()->route('admin.users.create')->with('error', __('ユーザが作成できませんでした。'));
        // }
    }

    public function editUser(Request $request){
        $user = User::find($request->id);
        $dataForm = $request->all();
        $user->name = $dataForm['name'];
        $user->email = $dataForm['email'];
        $user->type = $dataForm['type'];
        $user->save();
        $data = $dataForm;
        return response()->json([
            'status' => 200,
            'message' => __('Sửa tài khoản Thành công'),
            'data' => $data,
        ]);
    }

    
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id) ?? abort(404, 'ユーザが見つかりません');
        $user->delete();
        return redirect()->route('admin.users.index')->withSuccess('ユーザ削除が正常に完了しました!');
    }
}
