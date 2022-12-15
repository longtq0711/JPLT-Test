<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Test;
use App\Models\UserAnswer;
use App\Models\Score;
use App\Models\Category;
use App\Http\Requests\GetTestListRequest;

class MainController extends Controller
{
    public function dashboard(){
        $categories = Category::withCount('tests')->get();
        $scores = auth()->user()->scores;
        return view('dashboard', compact('scores','categories'));
    }

    public function test_list(GetTestListRequest $request){
        $name = $request->name;
        $level = $request->level;
        $category = Category::where(['name' => $name, 'level' => $level])->first();
        $tests = Test::where('category_id', $category->id)
                ->orWhere('finished_at','>',now())
                ->withCount('questions')->paginate(5);
        $scores = auth()->user()->scores;
        return view('test.list', compact('tests','scores'));
    }

    public function test($slug){
        $test = Test::whereSlug($slug)->with('questions.my_answer','my_score')->first() ?? abort(404, "T");

        // if($test->my_Score){
        //     return view('test.score', compact('test'));
        // }

        return view('test.index', compact('test'));
    }

    public function test_detail($slug){
        $test = Test::whereSlug($slug)->withCount('questions')->first() ?? abort(404, 'テストが見つかりません');
        return view('test.detail', compact('test'));
    }
    public function score(Request $request, $slug){
        $test = Test::with('questions')->whereSlug($slug)->first() ?? abort(404,'テストが見つかりません');
        $correct = 0;
        // if($test->my_Score){
        //     abort(404, '以前にこのテストを受けたことがあります');
        // }

        foreach($test->questions as $question){
            UserAnswer::create([
                'user_id' => auth()->user()->id,
                'question_id' => $question->id,
                'answer' => $request->post($question->id)
            ]);
            
            if($question->correct_answer ===$request->post($question->id)){
                $correct += 1;
            }
        }
        $points = round((100 / count($test->questions)) * $correct);
        $wrong = count($test->questions)-$correct;
        $score = Score::create([
            'user_id' => auth()->user()->id,
            'test_id' => $test->id,
            'point' => $points,
            'correct' => $correct ,
            'wrong' => $wrong,
        ]);

        return redirect()->route('test.result',$test->slug)->withSuccess("テスト完了。 あなたのスコア: ".$points);
    }

    function test_result(Request $request, $slug) { 
        $test = Test::with('questions')->whereSlug($slug)->first();
        $category = Category::find($test->category_id);
        return view('test.result', compact('test', 'category')); 
    }
    
    function test_history(Request $request, $slug) { 
        $type = 'history';
        $test = Test::with('questions')->whereSlug($slug)->first();
        $category = Category::find($test->category_id);
        return view('test.result', compact('test', 'category', 'type')); 
    }
}
