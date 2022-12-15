<x-app-layout>
    <x-slot name="header">{{ $test->title }}</x-slot>
    <div class="card">
        <div class="card-body">

            <p class="card-text">
            <div class="row">
                <h5 class="card-title float-start">
                    <a href="{{route('tests.index')}}" class="btn btn-sm btn-secondary"><i class="fa fa-arrow-left"></i>テストに戻る</a>
                </h5>
                <div class="col-md-4 mt-2">
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            問題数
                            <span class="badge bg-secondary rounded-pill">{{ $test->questions_count }}</span>
                        </li>
                        @if ($test->details)
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                参加人数
                                <span class="badge bg-warning rounded-pill">{{ $test->details['join_count'] }}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                平均スコア
                                <span class="badge bg-info rounded-pill">{{ $test->details['average'] }}</span>
                            </li>
                        @endif
                    </ul>
                    @if (count($test->topTen) > 0)
                        <div class="card mt-3">
                            <div class="card-body">
                                <h5 class="card-title">Top 10</h5>
                                <ul class="list-group">
                                    @foreach ($test->topTen as $score)
                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                            <div class="col-md-2">
                                                <strong class="h4">{{$loop->iteration}}.</strong>
                                            </div>
                                            <div class="col-md-2">
                                                <img src="{{$score->user->profile_photo_url}}" alt="" class="w-8 h-8 rounded-pill">
                                            </div>
                                            <div class="col-md-6">
                                                <span @if(auth()->user()->id == $score->user_id)class="text-danger" @endif>{{$score->user->name}}</span>
                                            </div>
                                             <div class="col-md-4">
                                                <span class="badge bg-success rounded-pill">{{ $score->point }}</span>
                                             </div>
                                        </li>
                                    @endforeach

                                </ul>
                            </div>
                        </div>
                    @endif
                </div>
                <div class="col-md-8">
                    <h4 class="mt-3 mb-2">テスト参加者と結果</h4>
                    <div class="card mt-4">
                        <div class="card-header">
                          <div class="row mt-2">
                            <div class="col-md-6">
                                名前
                            </div>
                            <div class="col-md-2">点</div>
                            <div class="col-md-2">真実</div>
                            <div class="col-md-2">間違い</div>
                          </div>
                        </div>
                        <div class="card-body">
                            @foreach($test->scores as $score)
                            <div class="row mt-2">
                                <div class="col-md-6">
                                    {{$score->user->name}}
                                </div>
                                <div class="col-md-2">{{$score->point}}</div>
                                <div class="col-md-2">{{$score->correct}}</div>
                                <div class="col-md-2">{{$score->wrong}}</div>
                              </div>
                              <hr>
                              @endforeach
                        </div>
                      </div>

                </div>
            </div>
            </p>



        </div>
    </div>
</x-app-layout>
