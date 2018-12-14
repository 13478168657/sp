// JavaScript Document
  var html = '';
  var slide_num=100;  
  var start_num=0,end_num=10;
  var channel_json_url;
  var locked=false;
  var page_num=1;
  $(window).scroll(function(){  
    // 当滚动到最底部以上n像素时， 加载新内容  
      if ($(document).height() - $(this).scrollTop() - $(this).height()<150) {  
	 s_e_num();
	 
	 
     }  
     });
	 function s_e_num()
	 { 
		
		  
	    if(end_num<slide_num)
		{
			 if(!((page_num*7)>start_num && (page_num*7)<end_num))
			 {
				return; 
				 
			 }
		 start_num=end_num;
		 end_num=end_num+7;
		 get_data();
		}
		else
		{
			
		  $("#loading a").text('没有更多内容');	
		 
		}		
	 }
	   function get_json_url(data_json)
	   {
		 channel_json_url=data_json;  	
	   }
	 /*异步加载数据*/
	 function get_data()
	 {
    	var head= document.getElementsByTagName('head')[0];
		var script= document.createElement('script');   
		script.type= 'text/javascript';
	    script.src=channel_json_url ;
		head.appendChild(script);		 
	 }
	 /*得到数据*/
	 function post_data(data)
	 {	
	  	var data_str;
        data_str=data;
	    var append_html=get_foot(data_str['foot']);
		
		append_html_info(append_html);
	 }
	 <!--添加内容到body体-->
	function append_html_info(data_html)
	{
   
	 if(data_html)/*判断数据不为空*/
		 {
			 $("#info_text").append(data_html);
			 page_num+=1;
		 }
		 else
		 {
			alert('内容为空'); 
		 }
	}
	 /*渲染轮播图*/
		 
// $("#zhaoinfolist").append(newsHTML);
  
	 
	 function get_foot(get_slide_data)
	 {
		 var html="";
	     
		 for(var i=start_num; i<end_num; i++)
		 {   
		       <!--1张图-->
			 if(get_slide_data[i]['thumb2'].length == 0 && get_slide_data[i]['thumb1'].length != 0)
			 {
				
				html += get_one_image(get_slide_data[i]);              
			 }
			 else if(get_slide_data[i]['thumb3'].length != 0)   <!--3张图-->
			 {
				html+= get_three_image(get_slide_data[i]);
			 }
			 else  <!--无图-->
			 {
				html+= get_text_image(get_slide_data[i]); 
			 }
			  if(i==15)
			 {				
				html+='<li style="float:left"><script type="text/javascript">  var cpro_id = "u3018881"; </script><script type="text/javascript" src="//cpro.baidustatic.com/cpro/ui/cm.js"></script></li>' 
			 
			 }else if(i==21)
			 {	
				html+='<li style="float:left"><script type="text/javascript">  var cpro_id = "u3018884"; </script><script type="text/javascript" src="//cpro.baidustatic.com/cpro/ui/cm.js"></script></li>' 
			 }else if(i==28)
			 {	
				html+='<li style="float:left"><script type="text/javascript">  var cpro_id = "u3018885"; </script><script type="text/javascript" src="//cpro.baidustatic.com/cpro/ui/cm.js"></script></li>' 
				 
			 }else if(i==34)
			 {
				 html+='<li style="float:left"><script type="text/javascript">  var cpro_id = "u2994060"; </script><script type="text/javascript" src="//cpro.baidustatic.com/cpro/ui/cm.js"></script></li>'
				 
			 }else if(i==39)
			 {
				 html+='<li style="float:left"><script type="text/javascript">  var cpro_id = "u2994058"; </script><script type="text/javascript" src="//cpro.baidustatic.com/cpro/ui/cm.js"></script></li>'
				 
			 }
			 else if(i==46)
			 {
				 html+='<li style="float:left"><script type="text/javascript">  var cpro_id = "u2994063"; </script><script type="text/javascript" src="//cpro.baidustatic.com/cpro/ui/cm.js"></script></li>'
				 
			 }else if(i==53)
			 {
				 html+='<li style="float:left"><script type="text/javascript">  var cpro_id = "u2994068"; </script><script type="text/javascript" src="//cpro.baidustatic.com/cpro/ui/cm.js"></script></li>'
				 
			 }else if(i==60)
			 {
				 html+='<li style="float:left"><script type="text/javascript">  var cpro_id = "u2994066"; </script><script type="text/javascript" src="//cpro.baidustatic.com/cpro/ui/cm.js"></script></li>'
				 
			 }else if(i==67)
			 {
				 html+='<li style="float:left"><script type="text/javascript">  var cpro_id = "u2994060"; </script><script type="text/javascript" src="//cpro.baidustatic.com/cpro/ui/cm.js"></script></li>'
				 
			 }else if(i==74)
			 {
				 html+='<li style="float:left"><script type="text/javascript">  var cpro_id = "u2994058"; </script><script type="text/javascript" src="//cpro.baidustatic.com/cpro/ui/cm.js"></script></li>'
				 
			 }
	      }
	return (html);
	 }
	 
	 function  get_one_image(data_one_image)
	 {
		 
		 var html="";
		 html += '<li class="thumb-item">  <div class="thumb-img"><a href="'+data_one_image['link']+'"> <img src="'+data_one_image['thumb1'] +'" alt="'+data_one_image['title'] +'" border="0" /> </a></div><div class="thumb-info"><h3 class="thumb-tit"><a href="'+data_one_image['link']+'">'+data_one_image['title']+'</a></h3>  <div class="thumb-extra"> <span class="keyword">'+ data_one_image['source']+'</span> <span class="source">'+data_one_image['pubDate']+'</span> </div></li>'
		 return html;
	 }
	 function get_three_image(data_three_image)
	 {
		 var html="";
	     html+=' <li> <div class="thumb-p3 pack">  <h3 class="thumb-p3-tit">'+'<a href="'+data_three_image['link']+'">' +data_three_image['title']+'</a>'+'</h3><div class="thumb-p3-imgs"> <a href="'+data_three_image['link']+'"> <img src="'+data_three_image['thumb1']+'" border="0" /> <img src="'+data_three_image['thumb2']+'" border="0" /> <img src="'+data_three_image['thumb3']+'" border="0" /></a> </div> </div></li>'
	     return html;
	 }
	 
	 
	 function get_text_image(data_text_image)
	 {
		 var html="";
	     html+=' <li> <div class="thumb-p3 pack">   <h3 class="thumb-p3-tit-txt"> <a href="' +data_text_image['link']+'" >'+data_text_image['title']+'</a> </h3><div class="thumb-info-txt">  <div class="thumb-extra-txt"> <span class="keyword">'+data_text_image['source']+'</span> <span class="source">'+data_text_image['pubDate']+'</span> </div></div></div></li>'
	     return html; 
		 
	 }