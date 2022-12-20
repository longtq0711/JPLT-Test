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
            </tr>
        </thead>
        <tbody>
            @foreach ($scores as $score)
                <tr class="test-result-step-row test-result-step-row-altone">
                    <td class="test-result-step-command-cell">
                    {{ $score->test->categories->level }}
                    </td>
                    <td class="test-result-step-description-cell">
                    {{ $score->test->categories->name }}
                    </td>
                    <td class="test-result-step-result-cell">
                        {{ $score->point }}/100
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
</x-app-layout>