@extends('layouts.main')
<title>{{$consult->name}}-马陆葡萄网</title>
<meta name="keywords" content="{{$consult->meta_keyword}}" />
<meta name="description" content="{{$consult->meta_description}}" />
@section('content')
    <link rel="stylesheet" href="/css/details.css">
    @include('layouts.header')
    <div class="news w clearfix">
        <div class="news-l">
            <div class="mainLeft">
                <div class="BreadNav">
                    <a href="/">首页</a>&nbsp;/&nbsp;
                    <a class="hover" href="/consult">{{$consult->name}}</a>
                </div>
                <div class="content">
                    <?php
                    echo htmlspecialchars_decode($consult->content);
                    ?>
                </div>
            </div>
        </div>
        <div class="news-r">
            <div class="news-r-n">
                @foreach($categories as $k=>$cat)
                    <?php
                    $articles = \App\Models\Article::where('category_id',$cat->id)->where('status',3)->select('id','title','thumbPic')->limit(10)->get();
                    ?>
                    @if($k == 0)
                        <?php
                        $articles = \App\Models\Article::where('category_id',$cat->id)->where('status',3)->select('id','title','thumbPic')->limit(9)->get();
                        ?>
                        <div class="news-r-t">
                            <h2>{{$cat->name}}</h2>
                        </div>
                        <div class="tag">
                            @foreach($articles as $article)
                                <a href="/thread-{{$article->id}}.html">{{$article->title}}</a>
                            @endforeach
                        </div>
                    @else
                        <?php
                        $articles = \App\Models\Article::where('category_id',$cat->id)->where('status',3)->select('id','title','thumbPic')->limit(3)->get();
                        ?>
                        <div class="news-r-t">
                            <h2>{{$cat->name}}</h2>
                        </div>
                        <ul class="side_class3">
                            @foreach($articles as $article)
                                <li>
                                    <div class="limg">
                                        <a href="/thread-{{$article->id}}.html" target="_blank" >
                                            <img src="{{env('IMG_URL')}}/{{$article->thumbPic}}" alt="{{$article->meta_description}}" >
                                        </a>
                                    </div>
                                    <div class="rtext">
                                        <div class="side3_title"><a href="/thread-{{$article->id}}.html" target="_blank" >{{$article->title}}
                                            </a></div>
                                        <div class="side3_redu">{{$article->visit_num}}</div>
                                    </div>
                                    <div style="clear:both"></div>
                                </li>
                                <div style=" clear:both"></div>
                            @endforeach
                        </ul>
                    @endif
                @endforeach
            </div>
        </div>
    </div>
@endsection
