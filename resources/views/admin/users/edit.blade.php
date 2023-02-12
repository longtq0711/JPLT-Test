@extends('admin.layouts.admin')

@section('title', __('ユーザ作成'))

@section('styles')
@endsection

@section('content')
    <div class="col-sm-12">
        <div class="card-box">
            @include('admin.includes.flash')

            <form method="POST" action="{{ route('admin.users.update', $dataEdit->id) }}">
                @method('PUT')
                @csrf
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>{{ __('名前') }}</label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="{{ __('名前') }}"
                                    value="{{ $dataEdit['name'] }}"
                                    maxlength=255
                                    class="form-control {{ $errors->has('name') ? ' is-invalid' : '' }}"
                                >
                                @if ($errors->has('name'))
                                    <span class="help-block">
                                        <small class="text-danger">{{ $errors->first('name') }}</small>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="form-group">
                                <label>{{ __('Email') }}</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="{{ __('Email') }}"
                                    value="{{ $dataEdit['email'] }}"
                                    maxlength=255
                                    class="form-control {{ $errors->has('email') ? ' is-invalid' : '' }}"
                                >
                                @if ($errors->has('email'))
                                    <span class="help-block">
                                        <small class="text-danger">{{ $errors->first('email') }}</small>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>{{ __('役割') }}</label>
                                <select
                                    name="type"
                                    placeholder="{{ __('役割') }}"
                                    class="form-control"
                                >
                                    <option value="teacher" {{ ($dataEdit['type'] == 'teacher') ? 'selected' : '' }}>教師</option>
                                    <option value="user" {{ ($dataEdit['type'] == 'user') ? 'selected' : '' }}>ユーザ</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="text-center">
                                <button type="submit" class="btn btn-primary btn-sm">編集</button>
                            </div>
                        </div>
                    </div>                    
                </div>
            </form>
        </div>
    </div>
@endsection

@section('scripts')
@endsection
