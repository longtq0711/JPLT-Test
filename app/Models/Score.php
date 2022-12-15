<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Score extends Model
{
    use HasFactory;
    protected $fillable = ['user_id', 'test_id', 'point', 'correct','wrong', 'finished_at'];

    public function user(){
        return $this->belongsTo('App\Models\User');
    }
    public function test(){
        return $this->belongsTo('App\Models\Test');
    }

}
