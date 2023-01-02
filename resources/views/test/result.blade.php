<x-app-layout>
    <x-slot name="header">結果ページ</x-slot>
    {{-- <h1 class="test-results-header">
        テスト結果
    </h1>

    <table class="table table-bordered">
        <thead>
            <tr>
                <td class="test-result-table-header-cell">
                    レベル
                </td>
                <td class="test-result-table-header-cell">
                    カテゴリ名
                </td>
                <td class="test-result-table-header-cell">
                    けっか
                </td>
                <!-- <td class="test-result-table-header-cell">
                    完了時間
                </td> -->
            </tr>
        </thead>
        <tbody>
            @php
                $result = $test->my_score[0];
            @endphp
            @if (isset($type) && $type == 'history')
                @foreach ($test->my_score as $score)
                    <tr class="test-result-step-row test-result-step-row-altone">
                        <td class="test-result-step-command-cell">
                            {{ $category->level }}
                        </td>
                        <td class="test-result-step-description-cell">
                            {{ $category->name }}
                        </td>
                        <td class="test-result-step-result-cell">
                            {{ $score->point }}/100
                        </td>
                    </tr>
                @endforeach
            @else
                <tr class="test-result-step-row test-result-step-row-altone">
                    <td class="test-result-step-command-cell">
                        {{ $category->level }}
                    </td>
                    <td class="test-result-step-description-cell">
                        {{ $category->name }}
                    </td>
                    <td class="test-result-step-result-cell">
                        {{ $result->point }}/100
                    </td>
                </tr>
            @endif
        </tbody>
    </table> --}}
    <x-slot name="header">{{ $test->title }} 結果ページ</x-slot>
    <div class="card">
        <div class="card-body">
            <h3><strong>{{ $test->title }} ー {{ $test->categories->level }} ー {{ $test->categories->name }} ー {{ $points }}/100</strong></h3>
            <div class="alert alert-info" role="alert">
                <h2 class="card-text"><i class="fas fa-info"></i> &nbsp;情報</h2>
                <i class="fa fa-check text-success mt-2"></i> : 正解 <br>
                <i class="fa fa-user text-dark mt-2"></i> : あなたの答え <br>
                <i class="fa fa-times text-danger mt-2"></i> : 間違った答え <br>
            </div>
            @foreach ($test->questions as $question)
                @if ($question->correct_answer == $question->my_answer->answer)
                    <i class="fa fa-check text-success"></i>
                @else
                    <i class="fa fa-times text-danger"></i>
                @endif
                <strong> #{{ $loop->iteration }}.</strong>{{ $question->question }}
                @if ($question->image)
                    <img src="{{ asset($question->image) }}" alt="" class="img-responsive"
                        style="width: 60%; border-radius:5px">
                @endif
                <div class="form-check ml-3 mt-2">
                    @if ('answer1' == $question->correct_answer)
                        <i class="fa fa-check text-success"></i>
                    @elseif('answer1' == $question->my_answer->answer)
                        <i class="fa fa-user text-dark"></i>
                    @else
                        <i class="fa fa-times text-danger"></i>
                    @endif
                    <label class="form-check-label" for="test{{ $question->id }}1">
                        {{ $question->answer1 }}
                    </label>
                </div>
                <div class="form-check ml-3">
                    @if ('answer2' == $question->correct_answer)
                        <i class="fa fa-check text-success"></i>
                    @elseif('answer2' == $question->my_answer->answer)
                        <i class="fa fa-user text-dark"></i>
                    @else
                        <i class="fa fa-times text-danger"></i>
                    @endif
                    <label class="form-check-label" for="test{{ $question->id }}2">
                        {{ $question->answer2 }}
                    </label>
                </div>
                <div class="form-check ml-3">
                    @if ('answer3' == $question->correct_answer)
                        <i class="fa fa-check text-success"></i>
                    @elseif('answer3' == $question->my_answer->answer)
                        <i class="fa fa-user text-dark"></i>
                    @else
                        <i class="fa fa-times text-danger"></i>
                    @endif
                    <label class="form-check-label" for="test{{ $question->id }}3">
                        {{ $question->answer3 }}
                    </label>
                </div>
                <div class="form-check ml-3">
                    @if ('answer4' == $question->correct_answer)
                        <i class="fa fa-check text-success"></i>
                    @elseif('answer4' == $question->my_answer->answer)
                        <i class="fa fa-user text-dark"></i>
                    @else
                        <i class="fa fa-times text-danger"></i>
                    @endif
                    <label class="form-check-label" for="test{{ $question->id }}4">
                        {{ $question->answer4 }}
                    </label>
                </div>
                @if ($question->correct_answer == $question->my_answer->answer)
                <div class="alert alert-success mt-2" role="alert">
                    <i class="fa fa-check"></i>&nbsp; あなたは質問に正しく答えました。<hr><i class="fas fa-info-circle"></i>&nbsp; 
                    {{-- {{$question->true_percent}}% の回答者がこの質問に正しく答えました。 --}} {{ $question->detail_answer}}
                  </div>
                @else
                <div class="alert alert-danger mt-2" role="alert">
                    <i class="fa fa-check"></i>&nbsp; あなたは質問に間違って答えました。<hr><i class="fas fa-info-circle"></i>&nbsp; 
                    {{-- {{$question->true_percent}}% の回答者がこの質問に正しく答えました。 --}} {{ $question->detail_answer}}
                  </div>
                @endif
                <hr>
            @endforeach


        </div>
    </div>
</x-app-layout>