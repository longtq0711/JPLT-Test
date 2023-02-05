<x-app-layout>
    <x-slot name="header">テスト編集</x-slot>
    
    <div class="card">
        <div class="card-body">
            <h5 class="card-title float-end">
                <a href="{{route('questions.create', $test->id)}}" class="btn btn-sm btn-primary"><i class="fa fa-plus"></i>質問追加</a>
            </h5>
            <form method="POST" action="{{route('tests.update', $test->id)}}">
                @method('PUT')
                @csrf
                <div class="form-group">
                    <label for="">テスト名</label>
                    <input type="text" name="title" class="form-control mt-1 mb-2" value="{{ $test->title }}">
                </div>
                <div class="form-group">
                    <label for="level">レベル</label>
                    <select name="level" id="level" class="form-control mt-1 mb-2">
                        <option value="">レベルを選択してください</option>
                        <option @if($test->categories->level == 'N1') selected @endif value="N1">N1</option>
                        <option @if($test->categories->level=== 'N2') selected @endif value="N2">N2</option>
                        <option @if($test->categories->level == 'N3') selected @endif  value="N3">N3</option>
                        <option @if($test->categories->level == 'N4') selected @endif  value="N4">N4</option>
                        <option @if($test->categories->level == 'N5') selected @endif  value="N5">N5</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="category_name">カテゴリ名</label>
                    <select name="name" id="name" class="form-control mt-1 mb-2">
                        <option value="">カテゴリを選択してください</option>
                        <option value="ごい" @if($test->categories->name === 'ごい') selected @endif>ごい</option>
                        <option value="読解" @if($test->categories->name === '読解') selected @endif>読解</option>
                        <option value="聴解" @if($test->categories->name === '聴解') selected @endif>聴解</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="level">大問</label>
                    <select name="type" id="type" class="form-control mt-1 mb-2">
                        <option value="">大問を選択してください</option>
                        @foreach($categories as $category)
                            <option value="{{$category->type}}" @if($category->type=== $test->categories->type) selected @endif>{{$category->type}}</option>
                        @endforeach
                    </select>
                </div>
                <div class="form-group d-grid gap-2 mt-5" style="position: relative;">
                    <button class="btn btn-success btn-sm " type="submit">テスト編集</button>
                </div>
            </form>
        </div>
    </div>
    <x-slot name="js">
        <script>
            $('#hasFinished').change(function(){
                if($('#hasFinished').is(':checked')){
                    $('#finishedInput').show();
                }else{
                    $('#finishedInput').hide();
                }
            });
        </script>
    </x-slot>

</x-app-layout>