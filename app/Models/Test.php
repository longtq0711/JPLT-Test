<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use Cviebrock\EloquentSluggable\Sluggable;

class Test extends Model
{
    use HasFactory;
    use Sluggable;
    protected $fillable=['title','category_id', 'description','status','finished_at','slug'];

    protected $dates = ['finished_at'];

    protected $appends = ['details','my_rank'];

    public function getMyRankAttribute(){
        $rank = 0;
        foreach($this->scores()->orderByDesc('point')->get() as $score){
            $rank +=1;
            if(auth()->user()->id == $score->user_id){
                return $rank;
            }
        }
    }

    public function getDetailsAttribute(){
        if($this->scores()->count()>0){
            return [
                'average' => round($this->scores()->avg('point')),
                'join_count' => $this->scores()->count()
            ];
        }
        return null;
    }

    public function scores(){
        return $this->hasMany('App\Models\Score');
    }

    public function topTen(){
        return $this->scores()->orderByDesc('point');
    }

    public function my_score(){
        return $this->hasMany('App\Models\Score')->where('user_id',auth()->user()->id)->orderByDesc('finished_at');
    }


    public function getFinishedAtAttribute($date){
        return $date ? Carbon::parse($date) : null;
    }

    public function questions(){
        return $this->hasMany('App\Models\Question');
    }

    public function categories(){
        return $this->belongsTo('App\Models\Category', 'category_id', 'id');
    }
    public function sluggable(): array
    {
        return [
            'slug' => [
                'onUpdate' => true,
                'source' => 'title'
            ]
        ];
    }
}
