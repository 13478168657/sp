<?php

namespace App\Http\Controllers\Home;

use App\Models\Link;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Category;
use App\Models\Advertisement;
use App\Models\AdSpace;
use App\Models\BaseConfig;
use App\Models\Goods;
use App\Utils\PageUtil;
class HomeController extends Controller
{

    public function index(Request $reques){

        $categories = Category::where('base_id',1)->orderBy('number','desc')->limit(4)->get();
        $articles = Article::where('status',3)->orderBy('id','desc')->paginate(10);
        $baseConfig = BaseConfig::first();
        //广告展示
        $advertisements = Advertisement::where('status',3)->get();
        return view('home.index',['categories'=>$categories,'baseConfig'=>$baseConfig,'advertisements'=>$advertisements,'articles'=>$articles]);
    }

    public function lists(Request $request,$id){
        $position = strpos($id, 's');;

//        if($position < 0 || $position === false){
//            $id = $id;
//            $page=1;
//        }else{
//            $info = $id;
//            $id = substr($info, 0,strpos($info, 's'));
//            $page = substr($info,strpos($info, 's')+1);
//        }
//        $request->page = $page;
        $page = $request->input('page');
        $pageSize = 10;
        $category =  Category::where('id',$id)->first();
        $categories = Category::where('base_id',1)->orderBy('number','desc')->limit(3)->get();
        $advertisements = Advertisement::where('status',3)->get();
        $articles = Article::where('status',3)->where('category_id',$id)->orderBy('created_at','desc')->paginate($pageSize);
//        $pageSize = PageUtil::getPage($page,$articles->total(),$pageSize,$id,'s');
        return view('home.list',['category'=>$category,'categories'=>$categories,'articles'=>$articles,'advertisements'=>$advertisements,'pageSize'=>$pageSize,'page'=>$page]);
    }

    public function detail(Request $request,$id){
        $article = Article::where('id',$id)->first();
        $article->visit_num = $article->visit_num+1;
        $article->save();
        $category =  Category::where('id',$article->category_id)->first();
        $moreArticles = Article::where('id','!=',$id)->where('category_id',$article->category_id)->orderBy('id','desc')->limit(10)->get();
        $categories = Category::where('base_id',1)->where('id','!=',$article->category_id)->orderBy('number','desc')->take(3)->get();
        return view('home.detail',['article'=>$article,'categories'=>$categories,'category'=>$category,'moreArticles'=>$moreArticles]);
    }


    /*
     * 获取更多文章
     */
    public function moreArticle(Request $request){
        $cat_id = $request->input('cat_id','');
        if($cat_id){
            $articles = Article::where('status',3)->where('category_id',$cat_id)->orderBy('id','desc')->paginate(10);
        }else{
            $articles = Article::where('status',3)->orderBy('id','desc')->paginate(10);
        }
        $total = $articles->count();
        return json_encode(['code'=>0,'body'=>view('home.body.moreArticle',['articles'=>$articles])->render(),'total'=>$total]);
    }
}