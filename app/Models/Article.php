<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Article extends Model
{
    use SoftDeletes;
    public function customer(){
    	return $this->belongsTo('App\Models\Customer');
    }
    public function cateory(){
        return $this->belongsTo('App\Models\Category','category_id');
    }
}