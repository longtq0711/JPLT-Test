<x-app-layout>
    <x-slot name="header">大門作成</x-slot>
    
    <div class="card">
        <div class="card-body">
            <form method="POST" action="{{route('types.store')}}">
                @csrf
                <div class="form-group">
                    <label for="type">大門</label>
                    <input id="type" type="text" name="type" class="form-control mt-1 mb-2">
                </div>
                <div class="form-group">
                    <label for="level">レベル</label>
                    <select name="level" id="category" class="form-control mt-1 mb-2">
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
                    <select name="name" id="category" class="form-control mt-1 mb-2">
                        <option value="">カテゴリを選択してください</option>
                        <option value="ごい・文法">ごい・文法</option>
                        <option value="読解">読解</option>
                        <option value="聴解">聴解</option>
                    </select>
                </div>

                <div class="form-group d-grid gap-2 mt-5" style="position: relative;">
                    <button class="btn btn-success btn-sm " type="submit">保存</button>
                </div>
            </form>
        </div>
    </div>
</x-app-layout>