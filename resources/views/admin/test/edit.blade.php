<x-app-layout>
    <x-slot name="header">テスト編集</x-slot>
    
    <div class="card">
        <div class="card-body">
            <h5 class="card-title float-end">
                <a href="{{route('questions.create')}}" class="btn btn-sm btn-primary"><i class="fa fa-plus"></i>質問追加</a>
            </h5>
            <form method="POST" action="{{route('tests.update', $test->id)}}">
                @method('PUT')
                @csrf
                <div class="form-group">
                    <label for="">テスト名</label>
                    <input type="text" name="title" class="form-control mt-1 mb-2" value="{{ $test->title }}">
                </div>
                <div class="form-group">
                    <label for="">テストの説明</label>
                    <textarea name="description" class="form-control mt-1 mb-2"  id="" rows="4">{{$test->description}}</textarea>
                </div>
                <div class="form-group">
                    <label for="">テスト状態</label>
                    <select name="status" class="form-control" id="">
                        <option @if($test->questions_count<5) disabled @endif @if ($test->status === 'publish') selected @endif value="publish">
                        有効
                        </option>
                        <option @if ($test->status === 'passive') selected @endif value="passive">Pasif</option>
                        <option @if ($test->status === 'draft') selected @endif value="draft">Taslak</option>
                    </select>
                </div>
                <div class="form-group">
                    <input id="hasFinished" @if($test->finished_at) checked @endif type="checkbox" class="mt-2 mb-2">
                    <label for="">終了日はありますか?</label>
                </div>
                <div id="finishedInput" class="form-group" @if(!$test->finished_at) style="display: none"  @endif>
                    <label for="">終了日</label>
                    <input type="datetime-local" name="finished_at" @if($test->finished_at) value="{{ date('Y-m-d\TH:i', strtotime($test->finished_at))  }}" @endif class="form-control mt-1 mb-2" >
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