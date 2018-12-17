@foreach($articles as $article)
    <li class="thumb-item">
        <div class="thumb-img">

            <a href="/article/detail/{{$article->id}}.html"><img src="{{env('IMG_URL')}}/images/uploads/thumb/{{$article->thumbPic}}" border='0'/></a>
        </div>
        <div class="thumb-info">
            <h3 class="thumb-tit">
                <a href="/article/detail/{{$article->id}}.html">{{$article->title}}</a>
                @if($article->tag == 1)
                    <span class="dujia_span">推荐</span>
                @elseif($article->tag == 2)
                    <span class="dujia_span">独家</span>
                @endif
            </h3>
            <div class="thumb-extra">
                <span class="keyword">{{$article->source}}</span>
                <span class="source">{{date('m-d',strtotime($article->created_at))}}</span>
            </div>
        </div>
    </li>
@endforeach