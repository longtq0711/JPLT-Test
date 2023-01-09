<x-app-layout>
    <x-slot name="header">大門</x-slot>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title float-end">
                <a href="{{route('types.create')}}" class="btn btn-sm btn-primary"><i class="fa fa-plus"></i> 大門作成</a>
            </h5>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">大門</th>
                        <th scope="col">レベル</th>
                        <th scope="col">カテゴリ名</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($categories as $category)
                            <tr>
                                <td>{{ $category->type }}</td>
                                <td>{{ $category->level }}</td>
                                <td>{{ $category->name }}</td>
                                <td>
                                    <a href="{{ route('types.edit', $category->id) }}" class="btn btn-sm btn-outline-primary rounded-pill"><i class="fa fa-pen"></i></a>
                                    <a href="{{ route('types.destroy', $category->id) }}" onclick="return confirm('大門を削除してもよろしいですか？')" class="btn btn-sm btn-outline-danger rounded-pill"><i class="fa fa-times"></i></a>
                                </td>
                            </tr>
                    @endforeach
                </tbody>
            </table>
            {{$categories->links()}}
        </div>
    </div>
</x-app-layout>