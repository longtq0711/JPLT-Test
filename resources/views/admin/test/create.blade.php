<x-app-layout>
    <x-slot name="header">テスト作成</x-slot>
    
    <div class="card">
        <div class="card-body">
            <form method="POST" action="{{route('tests.store')}}">
                @csrf
                <div class="form-group">
                    <label for="title">テスト名</label>
                    <input id="title" type="text" name="title" class="form-control mt-1 mb-2" value="{{ old('title') }}">
                </div>
                <div class="form-group">
                    <label for="level">レベル</label>
                    <select name="level" id="level" class="form-control mt-1 mb-2">
                        <option value="">レベルを選択してください</option>
                        <option value="N1">N1</option>
                        <option value="N2">N2</option>
                        <option value="N3">N3</option>
                        <option value="N4">N4</option>
                        <option value="N5">N5</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="category_name">カテゴリ名</label>
                    <select name="category" id="name" class="form-control mt-1 mb-2">
                        <option value="">カテゴリを選択してください</option>
                        <option value="ごい">ごい</option>
                        <option value="読解">読解</option>
                        <option value="聴解">聴解</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="level">大問</label>
                    <select name="type" id="type" class="form-control mt-1 mb-2">
                        <option value="">大問を選択してください</option>
                    </select>
                </div>

                <div class="form-group d-grid gap-2 mt-5" style="position: relative;">
                    <button class="btn btn-success btn-sm " type="submit">保存</button>
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
            $('#type').click(function(){
                $.ajax({
                    type: 'GET',
                    url: "/teacher/category_type",
                    dataType: "JSON",
                    data: { 
                        name: $('#name').val(),
                        level: $('#level').val(),
                    },
                    success: function (data) {
                        if ($('#type').val().length == 0) {
                            $.each(data['categories'], function (i, item) {
                                $('#type').append($('<option>', { 
                                    value: item.type,
                                    text : item.type 
                                }));
                            });
                        }
                    }
                });
            });
        </script>
    </x-slot>

</x-app-layout>