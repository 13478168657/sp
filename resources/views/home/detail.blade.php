<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0" name="viewport" />
    <meta name="keywords" content='{{$article->meta_keyword}}'>
    <meta name="description" content='{{$article->meta_description}}'>
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <link rel="stylesheet" href="/css/wzy_common.css">
    <link rel="stylesheet" href="/css/20170531wenzhangye.css">
    <link rel="stylesheet" href="/css/swiper.min.css">
    <script src="/js/20170524zepto.js"></script>
    <script src="/js/wzy_common.js"></script>
    <script async custom-element="amp-analytics" src="/js/amp-analytics-0.1.js"></script>
    <title>{{$article->title}}</title>
    <!--head标签底部广告start-->
    <style></style>
    <!--head标签底部广告end-->
</head>
<body>
<!--百度自动推送 start-->
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
<!--百度自动推送 修改日期20180425 end-->
<div class="container">
    <!--头部导航区块start-->
    <!--header-->


    <header>
        <div class="pack"> <a href="javascript:void(0)"  onclick="button_back()" id="button_back"><span class="menu"></span></a> <span class="logo"></span> <span class="people"></span> </div>
    </header>
    <!--头部导航区块end-->
    <!--header-->
    <div class="main pagewidth">
        <div class="main_tit">
            <h1 id="title">{{$article->title}}</h1>
            <div class="info">
                <span id="pubtime">{{date('Y-m-d H:i',strtotime($article->created_at))}}</span>
                <span id="source">来源：{{$article->source}}</span>

            </div>
            <div class="clear"></div>
        </div>
        <div id="content" class="content1">
            <?php
                echo htmlspecialchars_decode($article->content);
            ?>
        </div>
        <style>
            .ishow{display:block}
        </style>
        <script type="text/javascript" src="/js/jquery-index-1.9.1.js"></script>
        <script type="text/javascript" src="/js/jquery-1.10.2.min.js"></script>
        <script src="/js/swiper.min.js"></script>
        <script src="/js/wzy_swiper_index.js"></script>
        <script type="text/javascript">
            var jQ_1_10_2 = $.noConflict(true);
            jQ_1_10_2('#content').children().children('img').each(function (){
                jQ_1_10_2(this).parent('p').css('text-indent','0')
            })
        </script>
        <script type="text/javascript">
            var winH=window.outerHeight;
            var pmH=window.screen.height;
            var lpH=0;
            var flag=false;
            jQ_1_10_2('#content p').each(function(){
                lpH=$(this).offset().top;
                if(jQ_1_10_2(this).offset().top - pmH*0.8 > winH) {
                    //alert(jQ_1_10_2(this).offset().top);
                    jQ_1_10_2(this).hide();
                    flag=true;
                }else{
                    jQ_1_10_2(this).addClass('ishow');
                }
            })
            if(flag){
                jQ_1_10_2("<div>",{
                    "class":"conmorebtn",
                    text:"查看全文>>",
                    click:function(){
                        $('#content p:hidden').fadeIn('slow');
                        $(this).hide();
                    },
                }).appendTo($("#content"))
            }
        </script>

        <!--微信分享-->
        <script type="text/javascript" src="/js/jweixin-1.0.0.js"></script>
        <script>
            var img_url='http://m.youth.cn/tmlm/201811/W020181128621699901664.jpg';
            if (img_url=='')
            {
                img_url='picture/20170718100youth_logo.jpg';
            }

            var meta_value = document.getElementsByTagName('meta')['description'];
            var des_name=meta_value.getAttribute("content");
            function get_wxdata(data){
                data_str=data;
            }
        </script>
        <!--跨域请求后台php文件-->
        <script src="/js/wx.php"></script>


        <!--正文下部广告及其它start-->
        <style>
            .fixed_top
            {
                position:fixed;
                width:10rem;
                z-index:100;
                top: 0px;
            }
        </style>



        <div style="display:none">
            <img src="/picture/20170718100youth_logo.jpg" width=100px />
        </div>
        <div class="leader_part">

            <!--20170712改动加入5个瀑布流信息-->
            <section  class="column">
                <!-- 普通列表 -->

                <div class="column-name">
                    <div class="column-icon"></div>
                    <span>{{$category->name}}</span></div>
                <ul class="thumb pack">
                @foreach($moreArticles as $art)
                    <li class="thumb-item">
                        <div class="thumb-img">
                            <a href="/article/detail/{{$art->id}}.html" >
                                <img src="{{env('IMG_URL')}}/{{$art->thumbPic}}" alt="40.jpg" border='0'/>
                            </a>
                        </div>
                        <div class="thumb-info">
                            <h3 class="thumb-tit">
                                <a href="http://m.youth.cn/qwtx/xxl/201812/t20181211_11810695.htm">{{$art->title}}</a>
                            </h3>
                            <div class="thumb-extra"> <span class="keyword">{{$art->source}}</span> <span class="source">{{date('Y-m-d H:i',strtotime($art->created_at))}}</span> </div>
                        </div>
                    </li>
                @endforeach
                </ul>
            </section>

            <!--20170712增加瀑布流结束-->




        </div>
        <!--此处去掉 alimama的广告-->
        <!--正文下部广告及其它end-->


    </div>

    <footer>
        <p>中国青年网版权所有&copy;2018</p>
    </footer>






</body>
</html>