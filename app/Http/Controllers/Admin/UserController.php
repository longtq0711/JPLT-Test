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

            return redirect()->route('admin.users.edit', $user->id)->with('success', __('Cập nhật thành công'));
        } catch (Exception $e) {
            DB::rollback();

            return redirect()->route('admin.users.edit', $user->id)->with('success', __('Lỗi không thể cập nhạt'));
        }
    }

    public function store(Request $request){
        $length = 6;
        $char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        $dataForm = $request->all();
        $dataForm['social'] = 'admin';
        $dataForm['password']= substr( str_shuffle( $char ), 0, $length );
        $user = User::create($dataForm);
        $data=$dataForm;
        return response()->json([
            'status' => 200,
            'message' => __('Đăng ký tài khoản Thành công'),
            'data' => $data,
        ]);
    }

    public function editUser(Request $request){
        $user = User::find($request->id);
        $dataForm = $request->all();
        $user->fullname = $dataForm['fullname'];
        $user->phone_number = $dataForm['phone_number'];
        $user->email = $dataForm['email'];
        $user->contact = $dataForm['contact'];
        $user->detail_contact = $dataForm['detail_contact'];
        $user->save();
        $data = $dataForm;
        return response()->json([
            'status' => 200,
            'message' => __('Sửa tài khoản Thành công'),
            'data' => $data,
        ]);
    }
}
