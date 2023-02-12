<x-app-layout>
    <x-slot name="header"> {{ $test->title }} </x-slot>
    <div class="card">
        <span class="mt-2" style="margin-left: 20px">
            レベル： {{ $category->level }}
        </span>
        <span style="margin-left: 20px">
            カテゴリ名：{{ $category->name }}
        </span>
        <div class="card-body">
            <h5 class="card-title float-start">
                <a href="{{route('tests.index')}}" class="btn btn-sm btn-secondary"><i class="fa fa-arrow-left"></i>テスト一覧に戻る</a>
            </h5>
            <h5 class="card-title float-end">
                <a href="{{route('questions.create', $test->id)}}" class="btn btn-sm btn-primary"><i class="fa fa-plus"></i>質問を作成</a>
            </h5>
            <table class="table table-bordered table-sm">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col" >質問名</th>
                        <th scope="col" >アクション</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($test->questions as $question )
                    <tr>
                        <td>質問{{ $loop->index + 1 }}</td>
                        <td>{{ $question->question }}</td>
                        <td class="d-flex">
                            <a href="{{ route('questions.edit',[$test->id,$question->id]) }}" class="btn btn-sm btn-primary"><i class="fa fa-pen"></i></a>
                            <form class="ml-1" method="POST" action="{{ route('questions.destroy', [$test->id,$question->id]) }}">
                                @csrf
                                <button type="submit" class="btn btn-sm btn-danger"><i class="fa fa-times"></i></button>
                            </form>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
            
        </div>
    </div>
</x-app-layout>