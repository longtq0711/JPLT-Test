<x-app-layout>
    <x-slot name="header">質問編集</x-slot>
    
    <div class="card">
        <div class="card-body">
            <form method="POST" action="{{route('questions.update', [$question->test_id, $question->id])}}" enctype="multipart/form-data">
                @csrf
                @method('PUT')
                <div class="form-group">
                    <label for="">質問名</label>
                    <textarea name="question" class="form-control mt-1 mb-2" value="" id="" rows="4">{{ $question->question }}</textarea>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="">回答1. A</label>
                            <textarea name="answer1" class="form-control mt-1 mb-2" value="" id="" rows="2">{{ $question->answer1 }}</textarea>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="">回答2. B</label>
                            <textarea name="answer2" class="form-control mt-1 mb-2" value="" id="" rows="2">{{ $question->answer2 }}</textarea>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="">回答3. C</label>
                            <textarea name="answer3" class="form-control mt-1 mb-2" value="" id="" rows="2">{{ $question->answer3 }}</textarea>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="">回答4. D</label>
                            <textarea name="answer4" class="form-control mt-1 mb-2" value="" id="" rows="2">{{ $question->answer4 }}</textarea>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="">正解</label>
                    <select name="correct_answer" id="" class="form-control mb-2 mt-2">
                        <option @if($question->correct_answer)=== 'answer1') selected @endif value="answer1">回答1. A</option>
                        <option @if($question->correct_answer)=== 'answer2') selected @endif value="answer2">回答2. B</option>
                        <option @if($question->correct_answer)=== 'answer3') selected @endif value="answer3">回答3. C</option>
                        <option @if($question->correct_answer)=== 'answer4') selected @endif value="answer4">回答4. D</option>
                    </select>
                </div>

                <div class="form-group d-grid gap-2 mt-5" style="position: relative;">
                    <button class="btn btn-success btn-sm " type="submit">保存</button>
                </div>
            </form>
        </div>
    </div>
    
</x-app-layout>