<x-app-layout>
    <x-slot name="header">{{ $test->title }}</x-slot>
    <div class="card">
        <div class="card-body">

            <p class="card-text">
            <div class="row">
                <div class="col-md-4">
                    <ul class="list-group">
                        @if ($test->my_rank)
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            あなたのランク
                            <span title=""
                                class="badge bg-primary rounded-pill">#{{ $test->my_rank }}</span>
                        </li>
                        @endif
                        @if ($test->my_result)
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Puan
                                <span title=""
                                    class="badge bg-primary rounded-pill">{{ $test->my_result->point }}</span>
                            </li>

                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                真実 / 間違い
                                <div class="float-end">
                                    <span title="" class="badge bg-success rounded-pill">{{ $test->my_result->correct }}
                                        真実</span>
                                    <span title="" class="badge bg-danger rounded-pill">{{ $test->my_result->wrong }}
                                        間違い</span>
                                </div>
                            </li>
                        @endif
                        @if ($test->finished_at)
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                参加期限
                                <span title="{{ $test->finished_at }}"
                                    class="badge bg-secondary rounded-pill">{{ $test->finished_at->diffForHumans() }}</span>
                            </li>
                        @endif
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
                    @if(count($test->topTen)>0)
                    <div class="card mt-3">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-crown"></i> &nbsp;Top 10</h5>
                            <ul class="list-group">
                                @foreach ($test->topTen as $result)
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <div class="col-md-2">
                                            <strong class="h4">{{$loop->iteration}}.</strong>
                                        </div>
                                        <div class="col-md-2">
                                            <img src="{{$result->user->profile_photo_url}}" alt="" class="w-8 h-8 rounded-pill">
                                        </div>
                                        <div class="col-md-6">
                                            <span @if(auth()->user()->id == $result->user_id)class="text-danger" @endif>{{$result->user->name}}</span>
                                        </div>
                                         <div class="col-md-4">
                                            <span class="badge bg-success rounded-pill">{{ $result->point }}</span>
                                         </div>
                                    </li>
                                @endforeach
                                
                            </ul>
                        </div>
                    </div>
                    @endif
                </div>
                <div class="col-md-12">
                    {{ $test->description }}
                    <div class="d-grid gap-2 mt-2">
                        <a href="{{ route('test.join', $test->slug) }}" class="btn btn-primary btn-sm">テストを受ける</a>
                    </div>
                </div>
            </div>
            </p>



        </div>
    </div>
</x-app-layout>
