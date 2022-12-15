<x-app-layout>
    <x-slot name="header">結果ページ</x-slot>
    <h1 class="test-results-header">
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
                <td class="test-result-table-header-cell">
                    完了時間
                </td>
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
    </table>
</x-app-layout>