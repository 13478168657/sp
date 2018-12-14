// JavaScript Document
$(document).ready(function(){
	var channel_json;
    var focusClass = 'nav-item-active',
        pn = $('#pageName').val(),
        nav = $('.nav-link');
	    locateNav();
		function locateNav(){
			  nav.each(function(){
				  var name = $(this).text().trim();
				  if(name == pn) $(this).addClass(focusClass);
			  });
	     if_pn();
		  }
      function if_pn()
	  {
       switch (pn)
	   {
	   case "要闻":
	     channel_json="http://t.m.youth.cn/jsonp/myouth.php?channel=qwtx&callback=post_data";
		 break;
	   
	   case "娱乐":
	     channel_json="http://t.m.youth.cn/jsonp/myouth.php?channel=yl&callback=post_data";
		 break;
		 
		case "健康":
	     channel_json="http://t.m.youth.cn/jsonp/myouth.php?channel=jk&callback=post_data";
		 break;
	  case "图片":
	     channel_json="http://t.m.youth.cn/jsonp/myouth.php?channel=tp&callback=post_data";
		 break; 
      case "科技":
	     channel_json="http://t.m.youth.cn/jsonp/myouth.php?channel=kj&callback=post_data";
		 break;
      case "社会":
	     channel_json="http://t.m.youth.cn/jsonp/myouth.php?channel=sh&callback=post_data";
		 break;
	   }
	   get_json_url(channel_json);
	  }
});