<x-app-layout>
    <x-slot name="header"></x-slot>
    <div class="title row">
        <h4>ご希望のレベルを選択してください</h4>
    </div>
    <form action="{{ route('test.list') }}" method="get" id="form">
        <div class="row">
            <div class="col-md-8">
                <div class="list-group">
                    <input name="level" id="level" type="hidden" value="">
                    @foreach (range(1, 5) as $item)
                        <div onClick="chooseLevel(this.id)" id="N{{ $item }}" class="category-item list-group-item-action mt-2" style="border-radius:20px" aria-current="true">  
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">N{{ $item }}</h5>    
                                <div class="">
                                </div>
                            </div>
                            <svg class="d-none checked" id="N{{ $item }}_check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
                        </div>
                    @endforeach
                    <div class="mt-2">
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <ul class="list-group list-group-flush">
                        <select name="name" id="category">
                            <option value="ごい・文法">ごい・文法</option>
                            <option value="読解">読解</option>
                            <option value="聴解">聴解</option>
                        </select>
                    </ul>
                </div>
                </div>
            </div>
            <div class="col-md-12">
                <div class="d-grid gap-2 mt-10" style="position: relative;">
                    <button type="submit" class="btn btn-success btn-sm">テスト一覧</button>
                </div>
            </div>
        </div>
    </form>
    <x-slot name="js">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.0/jquery.validate.min.js"></script>
        <script>
            function chooseLevel(id) {
                $('.checked').addClass('d-none')
                $('#' + id + '_check').removeClass('d-none');
                $('#level').val(id);
            }
            $(document).ready(function () {
                $('#form').validate({ 
                    rules: {
                        level: {
                            required: true,
                        },
                        name: {
                            required: true,
                        },
                    },
                    messages: {
                        level: {
                            required: "Please enter title",
                        },
                        name: {
                            required: "Please enter valid email",
                        }
                    },
                })
            });
        </script>
    </x-slot>
</x-app-layout>
