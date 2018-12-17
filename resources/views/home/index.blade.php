<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0" name="viewport" />
<meta name="description" content="{{$baseConfig->home_meta_description}}" />
<meta name="keywords" content="{{$baseConfig->home_key_word}}" />
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-capable" content="yes">


<link rel="stylesheet" href="/css/20181121mobile_page.css">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link rel="stylesheet" href="/css/swiper.min.css">
<link rel="stylesheet" href="/css/iconfont.css">

<script type="text/javascript" src="/js/jquery-index-1.9.1.js"></script>
<script src="/js/20170524zepto.js"></script>
<script src="/js/20170601mobile_common.js"></script>
<script src="/js/swiper.min.js"></script>
<script src="/js/swiper_index.js"></script>
<script>
var timestamp = Date.parse(new Date());
</script>
<script src="/js/20170606data_read.js"></script>
{{--<script src="/js/index.js"></script>--}}

<title>健身教练培训网</title>

</head>
<body>
<script>
(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';        
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();
</script>


<input id="pageName" type="hidden" value="要闻" />

<div class="container"> 
<!--区块导航start-->
<style>
.nav-item-next:after
{
  bottom:0%;
}
header .nav_url .nav-item span
{
color:#fff;
}
.toggle-btn {
     background: url() no-repeat center center; 
     color:#fff;
    background-color: #29B965;
}
header .nav_url .nav-item-three
{
    line-height: .8rem;
}
</style> 
<!--header-->
  <header>
    <div class="pack">  
        <nav class="nav-content">
              <span class="logo"></span>
              <ul class="nav_url">
                <li class="nav-item"><a  href="/"><span>首页</span></a></li>
                @foreach($categories as $category)
                <li class="nav-item"><a href="/list/{{$category->id}}.html"><span>{{$category->name}}</span></a></li>
                @endforeach
              </ul>
              <span class="toggle-btn iconfont icon-xuanzeqizhankai"><em>展开</em></span>
        </nav>
    </div>
  </header> 
  <!--header-->
<script>

    var channel_json;
    var focusClass = 'nav-item-active',
        pn = $('#pageName').val(),
        nav = $('.nav_url li');
        locateNav();
        function locateNav(){
              nav.each(function(index,element){
                  var name = $(this).text().trim();
                  if(name == pn) $(this).addClass(focusClass);
                                  
                                 if($(this).index()==6 || $(this).index()==7 || $(this).index()==8)
{
    $(this).addClass("nav-item-next");

}
                             
              });
         
          } 
$(".toggle-btn").on('click',function(){
    var toggle_em=$(".toggle-btn em").text();
    if(toggle_em=='展开')
    {
        $(".toggle-btn").css('transform','rotate(180deg)');
          $('.nav_url li').each(function(){
                              
                $(this).css("display","block");
          });
        $(".toggle-btn em").text("收起");
            $(".nav-content").animate({height:'2rem'},300);
        $(".toggle-btn").css('top','1.1rem');
                $(".toggle-btn").css('height','.8rem');
        
    }else if(toggle_em=='收起')
    {
        $(".toggle-btn").css('transform','rotate(0deg)');
            $(".toggle-btn").css('top','0rem');
              $(".toggle-btn").css('height','1.1rem');
        $(".nav-content").animate({height:'1.1rem'},300);
        $(".toggle-btn em").text("展开");
        for(var i=6;i<$(".nav_url li").length;i++)
        {
            
            $(".nav_url li").eq(i).css("display","none");
        }
    }
    
})
</script>

<!--区块导航end-->
  <div class="news_qw"  id="jyjy1">
  <section id="top-swiper" class="top-swiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        
        @foreach($advertisements as $ad)
        <div class="swiper-slide"> 
            <a href="{{$ad->url}}"><img src="{{env('IMG_URL')}}/{{$ad->photo}}" alt="111.png" border='0'/></a>
          <div class="swiper-text">
            <h3>
          <a href="{{$ad->url}}">{{$ad->desc}}</a>
           </h3>
          </div>
          </a>
        </div>
        @endforeach
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </section>

  <section id="column-topnews" class="column"> 
    <!--三张图片-->
 <!--首页模板信息流区块start-->
<ul class="thumb"  id="info_text">
    @foreach($articles as $article)
    <li class="thumb-item">
        <div class="thumb-img"> 

            <a href="/article/detail/{{$article->id}}.html"><img src="{{env('IMG_URL')}}/{{$article->thumbPic}}" border='0'/></a>
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
 </ul>
  <!--首页模板信息流区块end-->

  <div id="loading" class="more-show pack"> <a href="javascript:void(0);">加载更多</a> </div>
</section>
</div>
  <footer>
    <p>证书版权所有&copy;2018</p>
  </footer>
</div>
<script>
    var page = 2;

    $('#loading').click(function(){
        var data = {page:page};
        $.ajax({
            url:'/article/more',
            data:data,
            type:'GET',
            dataType:'json',
            success:function(res){
                if(res.code == 0){
                    page = page +1;
                    if(res.total ==0){
                        $('#loading a').text('无更多文章');
                    }else{
                        $('.thumb').append(res.body);
                    }
                }
            }
        });
    });
</script>
</body>
</html>