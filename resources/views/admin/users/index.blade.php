@extends('admin.layouts.admin')

@section('title', __('ユーザリスト'))

@section('content')
    <div class="col-md-12">
        <div class="card-box">
            <form action="">
                <div class="row">
                    <div class="col-sm-6 col-md-3">
                        <div class="form-group">
                            <label>{{ __('キーワード') }}</label>
                            <input type="text" name="keyword" placeholder="keyword" class="form-control" value="{{ request('keyword') }}">
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <button type="submit" class="btn btn-bordred-primary waves-effect width-md btn-search">{{ __('探す') }}</button>
                    </div>
                </div>
            </form>
            
            @include('admin.includes.flash')
 
            <div class="table-responsive">
                <table class="table table-hover table-sm mb-0">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>{{ __('名前') }}</th>
                            <th>{{ __('Email') }}</th>
                            <th>{{ __('登録日') }}</th>
                            <th>{{ __('役割') }}</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        @if ($paginates->count() == 0)
                            <tr>
                                <td colspan="11">
                                    <h5 class="text-warning text-center">{{ __('ユーザが見つかりません') }}</h5>
                                </td>
                            </tr>
                        @endif
                        @foreach ($paginates as $key => $item)
                            <tr>
                                <td>{{ (($paginates->currentPage() - 1) * 10) + (++$key) }}</td>
                                <td>{{ $item->name }}</td>
                                <td>{{ $item->email }}</td>
                                <td>{{ $item->created_at }}</td>
                                <td>
                                    {{ $item->type }}
                                </td>
                                <td class="text-right">
                                    <a href="{{ route('admin.users.edit', $item->id) }}" class="btn btn-sm btn-action btn-outline-primary"><i class="fas fa-pencil-alt"></i></a>
                                    {{-- <a href="{{ route('admin.users.show', $item->id) }}" class="btn btn-sm btn-action btn-outline-primary"><i class="far fa-eye"></i></a> --}}
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>

                @include('admin.includes.pagination', ['datas' => $paginates])
            </div>
        </div>
    </div>
@stop

@section('scripts')
    <script>
        function comfirmChangeUser(url){
            Swal.fire({
                title: 'Bạn có chắc chắn muốn thay đổi?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085D6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'OK',
                cancelButtonText: 'Hủy'
            }).then((result) => {
                if (result.value) {
                    window.location.href = url;
                }
            })
        }
    </script>
@stop
