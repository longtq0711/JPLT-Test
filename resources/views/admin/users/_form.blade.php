{!! csrf_field() !!}

<div class="row">
    <div class="col-md-9">
        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label>{{ __('Tên người dùng') }} *</label>
                    <input
                        name="fullname"
                        type="text"
                        placeholder="{{ __('tên người dùng') }}"
                        value="{{ $dataEdit->fullname }}"
                        maxlength=255
                        class="form-control {{ $errors->has('fullname') ? ' is-invalid' : '' }}"
                    >
                    @if ($errors->has('fullname'))
                        <span class="help-block">
                            <small class="text-danger">{{ $errors->first('fullname') }}</small>
                        </span>
                    @endif
                </div>
            </div>

            <div class="col-md-4">
                <div class="form-group">
                    <label>{{ __('Email') }} *</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="{{ __('Email') }}"
                        value="{{ $dataEdit->email }}"
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

            <div class="col-md-4">
                <div class="form-group">
                    <label>{{ __('Số điện thoại') }} *</label>
                    <input
                        type="text"
                        name="phone_number"
                        placeholder="{{ __('Số điện thoại') }}"
                        value="{{ $dataEdit->phone_number }}"
                        maxlength=255
                        class="form-control {{ $errors->has('phone_number') ? ' is-invalid' : '' }}"
                    >
                    @if ($errors->has('phone_number'))
                        <span class="help-block">
                            <small class="text-danger">{{ $errors->first('phone_number') }}</small>
                        </span>
                    @endif
                </div>
            </div>

            <div class="col-md-4">
                <div class="form-group">
                    <label>{{ __('Kênh đăng ký') }}</label>  
                    @php
                        $socialCheck =  old('social',  $dataEdit->social ?? 'web');
                    @endphp
                    <select name="social"  class="form-control {{ $errors->has('social') ? ' is-invalid' : '' }}">
                        @foreach (['web', 'facebook', 'google'] as $key => $social)
                            <option value="{{ $social }}" {{ $social == old('social',  $dataEdit->social ?? 'web') ? 'selected' : '' }}>{{ $social }}</option> 
                        @endforeach
                    </select>

                    @if ($errors->has('social'))
                        <span class="help-block">
                            <small class="text-danger">{{ $errors->first('social') }}</small>
                        </span>
                    @endif
                </div>
            </div>

            <div class="col-md-12">
                <label for="">{{ _('Địa chỉ') }}</label>
                <div class="table-responsive">
                    <table class="table table-hover table-sm mb-0">
                        <thead>
                            <tr>
                                <th>{{ __('Tên người dùng') }}</th>
                                <th>{{ __('Tỉnh/Thành phố') }}</th>
                                <th>{{ __('Quận/Huyện') }}</th>
                                <th>{{ __('Địa chỉ') }}</th>
                                <th>{{ __('Địa chỉ mặc định')}}</th>
                                <th>{{ __('Trạng thái') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            @if ($dataEdit->address->count() == 0)
                                <tr>
                                    <td colspan="11">
                                        <h5 class="text-warning text-center">{{ __('Không tìm thấy địa chỉ') }}</h5>
                                    </td>
                                </tr>
                            @endif
                            @foreach ($dataEdit->address as $addr)
                                <tr>
                                    <td>{{ $addr->name }}</td>
                                    <td>{{ $addr->city }}</td>
                                    <td>{{ $addr->district }}</td>
                                    <td>{{ $addr->address }}</td>
                                    <td>{{ $addr->default_address == 1 ? __('Mặc định') : ''}}</td>
                                    <td>{{ $addr->status }}</td>
                                </tr>   
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div class="col-md-3">
        <div class="box box-info">
            <div class="box-body text-center">
                <button type="submit" class="btn btn-primary btn-sm">{{ $form_title }}</button>
            </div>
        </div>

        <div class="box box-info {{ $errors->has('status') ? 'box-error' : '' }}">
            <div class="box-header with-border">
                <h3 class="box-title">{{ __('Trạng thái') }}</h3>
            </div>
            <div class="box-body">
                @php
                    $statusCheck = old('status',  $dataEdit->status ?? STATUS_ACTIVE);
                @endphp
                @foreach ([STATUS_ACTIVE, STATUS_VERIFY, STATUS_INACTIVE] as $key => $status)
                    <label class="radio-custom">{{ __($status) }}
                        <input value="{{ $status }}" type="radio" name="status" {{ ($status == $statusCheck ) ? 'checked': '' }}>
                        <span class="checkmark"></span>
                    </label>   
                @endforeach
        
                @if ($errors->has('status'))
                    <span class="help-block">
                        <small class="text-danger">{{ $errors->first('status') }}</small>
                    </span>
                @endif
            </div>
        </div>
        <div class="box box-info {{ $errors->has('is_test') ? 'box-error' : '' }}">
            <div class="box-body">
                <label class="custom-checkbox">
                    {{ __('Là tài khoản test') }}
                    <input type="checkbox" value="1" name="is_test" {{ old('is_test',  $dataEdit->is_test ?? 0) == 1 ? 'checked' : '' }}>
                    <span class="checkmark"></span>
                </label>
        
                @if ($errors->has('is_test'))
                    <span class="help-block">
                        <small class="text-danger">{{ $errors->first('is_test') }}</small>
                    </span>
                @endif
            </div>
        </div>
        <div class="box box-info {{ $errors->has('is_sale_agent') ? 'box-error' : '' }}">
            <div class="box-body">
                <label class="custom-checkbox">
                    {{ __('Là tài khoản sale-agent') }}
                    <input type="checkbox" value="1" name="is_sale_agent" {{ old('is_sale_agent',  $dataEdit->is_sale_agent ?? 0) == 1 ? 'checked' : '' }}>
                    <span class="checkmark"></span>
                </label>
        
                @if ($errors->has('is_sale_agent'))
                    <span class="help-block">
                        <small class="text-danger">{{ $errors->first('is_sale_agent') }}</small>
                    </span>
                @endif
            </div>
        </div>
    </div>
</div>
