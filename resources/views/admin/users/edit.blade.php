@extends('admin.layouts.admin')

@section('title', __('Cập nhật khách hàng'))

@section('styles')
@endsection

@section('content')
    <div class="col-sm-12">
        <div class="card-box">
            @include('admin.includes.flash')

            <form action="{{ route('admin.users.update', $dataEdit->id) }}" id="vali-form" method="POST">
                {{ method_field('PUT') }}
                @include('admin.users._form', ['form_title' => __('Cập nhật'), 'routeType' => 'edit'])
            </form>
        </div>
    </div>
@endsection

@section('scripts')
@endsection
