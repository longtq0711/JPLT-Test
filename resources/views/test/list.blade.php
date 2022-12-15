<x-app-layout>
    <x-slot name="header"></x-slot>
    <div class="title row">
        <h4>参加できるテスト</h4>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="list-group">
                @if (empty($tests)) 
                    テストがない
                @else
                    @foreach ($tests as $test)
                        <a href="{{ route('test.detail',$test->slug) }}" class="list-group-item list-group-item-action mt-2" style="border-radius:20px" aria-current="true">  
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">{{ $test->title }}</h5>    
                                <div class="">
                                </div>
                                <small>{{$test->finished_at ? $test->finished_at->diffForHumans().' bitiyor' : null }}</small>
                            </div>
                            <p class="mb-1">{{ Str::limit($test->description, 100) }}</p>
                            <small>{{$test->questions_count.' 質問'}}</small>
                        </a>
                    @endforeach
                @endif
                <div class="mt-2">
                    {{ $tests->links()}}
                </div>
            </div>
        </div>
        <!-- <div class="col-md-4">
            <div class="card">
                <div class="card-header" style="text-align: center">
                    <i class="far fa-chart-bar"></i>  あなたのテスト結果
                </div>
                <ul class="list-group list-group-flush">
                    
                    @if($scores->isEmpty())

                    <div class="alert alert-warning">
                        <i class="fas fa-exclamation"></i> まだテストを見ていません。 左側のフィールドでクイズを選択して、知識のテストを開始してください!
                    </div>
                    @else
                    @foreach ($scores as $score)
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-md-10">
                                <a style="text-decoration: none; color: #000" href="{{route('test.detail', $score->test->slug)}}">{{$score->test->title}}</a> 
                            </div>
                            <div class="col-md-2" style="margin-top:auto;margin-bottom:auto;">
                                {{$score->point}}
                            </div>
                        </div>

                    </li>  
                    @endforeach
                    @endif

                   
                  
                </ul>
              </div>
            </div>
        </div> -->
    </div>
</x-app-layout>
