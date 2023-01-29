<x-app-layout>
    <x-slot name="header">テスト</x-slot>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title float-end">
                <a href="{{route('tests.create')}}" class="btn btn-sm btn-primary"><i class="fa fa-plus"></i> テスト作成</a>
            </h5>
            <form action="" method="GET" class="mb-2">
                <div class="form row">
                    <!-- <div class="col-md-2">
                        <input type="text" name="title" class="form-control" value="{{request()->get('title')}}" placeholder="テスト">
                    </div> -->
                    <!-- <div class="col-md-2">
                        <select name="status" id="" onchange="this.form.submit()" class="form-control" >
                            <option  value="">ステータスを選択</option>
                            <option @if (request()->get('status') === 'publish') selected @endif value="publish">有効</option>
                            <option @if (request()->get('status') === 'passive') selected @endif value="passive">無効</option>
                            <option @if (request()->get('status') === 'draft') selected @endif value="draft">ドラフト</option>
                        </select>
                    </div> -->
                    @if (request()->get('title') || request()->get('status'))
                        <div class="col-md-2">
                            <a href="{{ route('tests.index') }}" class="btn btn-secondary ">リセット</a>
                        </div>
                    @endif

                </div>
            </form>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">テスト</th>
                        <th scope="col">問題数</th>
                        <th scope="col">レベル</th>
                        <th scope="col">カテゴリ名</th>
                        <th scope="col">大問</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($tests as $test)
                    <tr>
                        <td>{{ Str::limit($test->title, 20) }}</td>
                        <td>{{ $test->questions_count }}</td>
                        <td>{{ $test->categories->level }}</td>
                        <td>{{ $test->categories->name }}</td>
                        <td>{{ $test->categories->type }}</td>
                        <td>
                            <!-- <a href="{{ route('tests.details', $test->id) }}" class="btn btn-sm btn-outline-info rounded-pill"><i class="fa fa-info-circle"></i></a> -->
                            <a href="{{ route('questions.index', $test->id) }}" class="btn btn-sm btn-outline-warning rounded-pill"><i class="fa fa-question"></i></a>
                            <a href="{{ route('tests.edit', $test->id) }}" class="btn btn-sm btn-outline-primary rounded-pill"><i class="fa fa-pen"></i></a>
                            <a href="{{ route('tests.destroy', $test->id) }}" onclick="return confirm('テストを削除すると、作成されたすべての問題と、テストに参加した場合の結果が削除されます。 削除してもよろしいですか？')" class="btn btn-sm btn-outline-danger rounded-pill"><i class="fa fa-times"></i></a>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
            {{$tests->withQueryString()->links()}}
        </div>
    </div>
</x-app-layout>