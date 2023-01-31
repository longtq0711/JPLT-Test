<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Permission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class AdminController extends Controller
{
    public function changeLanguage($language)
    {
        Session::put('website_language', $language);

        return redirect()->back();
    }

    public function index(Request $request)
    {
        return redirect()->route('admin.users.index');
    }

    /**
     * admin login get.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function login()
    {
        return view('admin.login');
    }

    /**
     * admin login submit.
     *
     * @return $this|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function signIn(Request $request)
    {
        $data = $request->all();
        $auth = Auth()->guard('admin');
        $remember = isset($data['remember']) ? true : false;

        if ($auth->attempt(['email' => $data['email'], 'password' => $data['password']], $remember)) {
            $url = self::_getRedirectUrl();

            return redirect($url);
        } else {
            $request->session()->flash('login-error', __('間違ったユーザー名またはパスワード。'));

            return redirect(route('admin.login'))->withInput();
        }
    }

    public function logout()
    {
        Auth()->guard('admin')->logout();

        return redirect(route('admin.login'));
    }

    /**
     * @return string
     */
    private function _getRedirectUrl()
    {
        if (Session::has('admin_redirect_url')) {
            $url = Session::get('admin_redirect_url');
            Session::forget('admin_redirect_url');
        } else {
            $url = route('admin.users.index');
        }

        return $url;
    }
}
