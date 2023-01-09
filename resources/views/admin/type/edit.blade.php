<x-app-layout>
    <x-slot name="header">大門編集</x-slot>
    
    <div class="card">
        <div class="card-body">
            <form method="POST" action="{{route('types.update', $category->id)}}">
                @method('PUT')
                @csrf
                <div class="form-group">
                    <label for="type">大門</label>
                    <input id="type" type="text" name="type" class="form-control mt-1 mb-2" value="{{ $category->type }}">
                </div>
                <div class="form-group">
                    <label for="level">レベル</label>
                    <select name="level" id="category" class="form-control mt-1 mb-2">
                        <option value="">レベルを選択してください</option>
                        <option value="N1" {{ ($category->level == 'N1') ? 'selected' : '' }}>N1</option>
                        <option value="N2" {{ ($category->level == 'N2') ? 'selected' : '' }}>N2</option>
                        <option value="N3" {{ ($category->level == 'N3') ? 'selected' : '' }}>N3</option>
                        <option value="N4" {{ ($category->level == 'N4') ? 'selected' : '' }}>N4</option>
                        <option value="N5" {{ ($category->level == 'N5') ? 'selected' : '' }}>N5</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="category_name">カテゴリ名</label>
                    <select name="category" id="category" class="form-control mt-1 mb-2">
                        <option value="">カテゴリを選択してください</option>
                        <option value="ごい・文法" {{ ($category->name == 'ごい・文法') ? 'selected' : '' }} >ごい・文法</option>
                        <option value="読解" {{ ($category->name == '読解') ? 'selected' : '' }}>読解</option>
                        <option value="聴解" {{ ($category->name == '聴解') ? 'selected' : '' }}>聴解</option>
                    </select>
                </div>

                <div class="form-group d-grid gap-2 mt-5" style="position: relative;">
                    <button class="btn btn-success btn-sm " type="submit">編集</button>
                </div>
            </form>
        </div>
    </div>
</x-app-layout>