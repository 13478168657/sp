// JavaScript Document    
	 $(function(){
	  var moreNum=10;
	  var title="",link='',source='',docabs='',pubDate='',thumb1='',moreNum_last,dataListrd=[],dataList=[],num_index=0,addment_arr=[];//文章标题
	                          
	  dataList.push({"title":'看完这个展览 观众们都燃起来了！',"link":'http://news.youth.cn/jsxw/201812/t20181203_11801915.htm',"source":'新华网',"pubDate":'12-03',"docabs":'',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181203332058464646.png'});						   
                                   
	  dataList.push({"title":'中华人民共和国和阿根廷共和国联合声明',"link":'http://news.youth.cn/sz/201812/t20181203_11801899.htm',"source":'人民日报',"pubDate":'12-03',"docabs":'',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181203307324166740.jpg'});						   
                                   
	  dataList.push({"title":'国际残疾人日|重磅微视频 牵挂',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181203_11801888.htm',"source":'新华社',"pubDate":'12-03',"docabs":'牵挂是一种惦记，牵挂是一种期待。12月3日是国际残疾人日，残疾人的健康与幸福，习近平总书记始终牵挂。',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181203298957921235.jpg'});						   
                                   
	  dataList.push({"title":'全面婚俗改革来了民政部向天价彩礼低俗婚闹说不',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181203_11801885.htm',"source":'央视',"pubDate":'12-03',"docabs":'一场婚礼，照出了多少恶俗的陈规旧习。针对当前一些地方天价彩礼、奢侈浪费办婚礼等问题，民政部日前要求，全面推进婚俗改革，倡导简约适当的婚俗礼仪。针对婚俗陋习，民政部要求，要鼓励和推广传统婚礼，积极倡...',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181203301017340947.jpg'});						   
                                   
	  dataList.push({"title":'新时代青年职业选择的价值省思',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181203_11801886.htm',"source":'中国青年报',"pubDate":'12-03',"docabs":'1835年8月，中学毕业的马克思撰写了《青年在选择职业时的考虑》，这是他在思考自身生命轨迹甚至人类前途时，作出的一次重要价值抉择与时代省思。他慷慨激昂地向世人宣称，“如果我们选择了最能为人类而工作的职业...',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181203300062060169.jpg'});						   
                                   
	  dataList.push({"title":'浙江温岭环保局干部办案遭车撞殉职两嫌犯被刑拘',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181203_11801884.htm',"source":'人民日报',"pubDate":'12-03',"docabs":'（原标题：浙江温岭环保局干部办案时遭车撞殉职两嫌犯被刑拘）12月1日18时许，温岭市环保部门会同公安机关在箬横浦岙路段调查环境违法案件时，温岭市环保局环境监察大队副大队长兼大溪中队中队长陈奔被犯罪嫌疑人...',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181203301852466298.jpg'});						   
                                   
	  dataList.push({"title":'揭秘沈阳医疗骗保：诊断是假的 病人是演的',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181203_11801887.htm',"source":'中国新闻周刊',"pubDate":'12-03',"docabs":'“诊断是假的，病人是演的，病房是空的。” 11月14日，央视《焦点访谈》曝光了沈阳两家民营医院通过雇“病人”虚假住院、伪造病历来骗取医保基金。随着这一事件被披露，医疗机构通过“挂床骗保”套取医保金的这门...',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181203299619114221.jpg'});						   
                                   
	  dataList.push({"title":'特朗普将正式通知国会终止《北美自由贸易协定》',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181203_11801882.htm',"source":'海外网',"pubDate":'12-03',"docabs":'美国总统特朗普日前表示，他很快就会正式通知国会，将终止《北美自由贸易协定》（NAFTA），并敦促国会批准他与墨西哥和加拿大两国首脑签署的《美国-墨西哥-加拿大协定》(USMCA)。<br/>',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181203302478685123.png'});						   
                                   
	  dataList.push({"title":'400多名抗议者被逮捕 法国“黄背心”动静闹大了',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181203_11801883.htm',"source":'环球网',"pubDate":'12-03',"docabs":'原标题：400多名抗议者被逮捕，法国“黄背心”动静闹大了[环球时报驻法国特约记者董铭环球时报特约记者胡浩]法新社2日报道称，巴黎当地时间周六（1日）爆发大规模抗议，对马克龙政府政策不满的“黄背心”抗议者制...',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181203302831115842.jpg'});						   
                                   
	  dataList.push({"title":'国际残疾人日|重磅微视频 牵挂',"link":'http://news.youth.cn/gn/201812/t20181203_11801874.htm',"source":'新华社',"pubDate":'12-03',"docabs":'',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181203295551541169.png'});						   
                                   
	  dataList.push({"title":'G20，习近平主席忙碌的身影',"link":'http://news.youth.cn/sz/201812/t20181203_11801870.htm',"source":'人民日报客户端',"pubDate":'12-03',"docabs":'',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181203294930211478.png'});						   
                                   
	  dataList.push({"title":'新时代践行新发展理念纪行',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181202_11801772.htm',"source":'新华网',"pubDate":'12-02',"docabs":'新华社北京12月2日电题：在改革开放大潮中砥砺奋进——新时代践行新发展理念纪行40年，改革开放波澜壮阔。新时代，发展进步风正帆悬。纪念改革开放40周年之际，新华社派出五路专题采访报道组，分赴近20个省区市，...',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181202729611717542.png'});						   
                                   
	  dataList.push({"title":'习主席首次到访巴拿马，为何“不感陌生”？',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181202_11801755.htm',"source":'新华国际客户端',"pubDate":'12-02',"docabs":'新华社巴拿马城12月1日电 “？Chinos, amigos!”在地球另一边的巴拿马，当地人见到一副东方面孔的我们，总会笑着喊一声：“中国人，好朋友！”2017年6月，中国和巴拿马建立外交关系。建交不到一年半，这个美丽的...',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181202692091648474.png'});						   
                                   
	  dataList.push({"title":'书院规制知多少',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181202_11801751.htm',"source":'光明网',"pubDate":'12-02',"docabs":'光明网讯（记者贺梓秋）书院是中国古代独具特色的文化教育组织，具有鲜明的教育教学特色，坚持教学活动与学术研究相结合“书院里的一天”系列动漫，旨在以动漫的形式还原古代书院生活，并对书院的相关制度模式、...',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181202686281724866.png'});						   
                                   
	  dataList.push({"title":'中国最古老“大学”问津书院',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181202_11801749.htm',"source":'光明网',"pubDate":'12-02',"docabs":'光明网武汉讯（记者郑芳芳）“问津书院远离城区，旅游功能往往大于教化功能。现代书院的教育、移风易俗功能的发挥千古问津路，圣贤集大成。问津书院因《论语》中孔子周游列国至楚国孔子使“子路问津”于长沮、桀...',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181202685153855787.png'});						   
                                   
	  dataList.push({"title":'40人对话40年|林志刚：“站”在天路源',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181202_11801745.htm',"source":'中国文明网',"pubDate":'12-02',"docabs":'40人对话40年|林志刚：“站”在天路源（官宣版）.',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181202681873122698.png'});						   
                                   
	  dataList.push({"title":'巴拿马人点赞“中国机遇”期待合作更紧密',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181202_11801739.htm',"source":'国际在线',"pubDate":'12-02',"docabs":'△ 巴拿马民众聊中国印象与中巴合作（视频采访：国际在线巴拿马特约通讯员张雪云）12月2日至3日，中国国家主席习近平将对阿根廷和巴拿马进行国事访问。这是中国同巴拿马建交后中国国家主席首次访巴，意义重大。',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181202666880891346.png'});						   
                                   
	  dataList.push({"title":'40年，几代中国人的结婚日记',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181202_11801737.htm',"source":'中国新闻网',"pubDate":'12-02',"docabs":'“那时候讲究媒人说媒、递庚帖、认亲的习俗和规矩。”只不过遗憾的是，由于马上要入伍，朱永贵和田翠英并没有走到认亲这一步。“说是结婚，其实就是两家亲戚一起吃个饭，一切从简。”他说，彩礼什么的就更不可能...',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181202665422006961.png'});						   
                                   
	  dataList.push({"title":'美丽乡村·河北李家庄村',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181202_11801735.htm',"source":'人民网',"pubDate":'12-02',"docabs":'中央统战部旧址李家庄村是中共中央统战部旧址所在地。1948年4月，中共中央城市工作部进驻李家庄，同年9月更名为中共中央统一战线工作部。1949年3月，中央统战部离开李家庄村进驻北平。现在，李家庄依托红色统战文...',"thumb1":''});						   
                                   
	  dataList.push({"title":'几十年的中国生活为何对这个外国人影响这么大？',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181202_11801732.htm',"source":'光明网',"pubDate":'12-02',"docabs":'在北京喝酒实实在在是把自己的心给人看，——路易斯·阿斯恰鲁（Lewis Aschalew）如是说路易斯.阿斯恰鲁（Lewis Aschalew），来自埃塞俄比亚，埃塞俄比亚船运公司首席代表路易斯.阿斯恰鲁来自埃塞俄比亚，',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181202662387871828.png'});						   
                                   
	  dataList.push({"title":'做一件好事不难，那做一百万件呢？',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181202_11801728.htm',"source":'中国新闻网',"pubDate":'12-02',"docabs":'在长沙火车站的候车大厅内坐在一辆小推车旁长沙火车站。视频截图老人便无偿帮他们排忧解难视频截图这位老人名叫刘镜辉便在长沙火车站从事义务服务戳视频↓↓今年72岁的刘镜辉1977年调入长沙火车站视频截图同年，...',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181202661243638148.jpg'});						   
                                   
	  dataList.push({"title":'《我们一起走过——致敬改革开放40周年》今开播',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181202_11801687.htm',"source":'央视财经　',"pubDate":'12-02',"docabs":'十八集纪录片《我们一起走过——致敬改革开放40周年》，由中共中央宣传部、中央广播电视总台联合制作。',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181202572204980384.png'});						   
                                   
	  dataList.push({"title":'云南和顺古镇：西南边陲的江南水乡',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181202_11801658.htm',"source":'人民网-人民视频',"pubDate":'12-02',"docabs":'云南省腾冲县和顺古镇（图片由YY拍摄）探和顺，话古今。10月21日上午9时，人民视频联合YY直播、云南广电带您一同走进边城腾冲，访和顺古镇街巷民居云南省腾冲县和顺古镇（图片由YY拍摄）探和顺，话古今。10月21日...',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181202497697782488.jpg'});						   
                                   
	  dataList.push({"title":'截至11月中旬我国进出口总值已超过去年全年',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181202_11801653.htm',"source":'央视网',"pubDate":'12-02',"docabs":'',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181202492829042876.png'});						   
                                   
	  dataList.push({"title":'历史巨变：共享改革成果 共建美好生活',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181202_11801649.htm',"source":'',"pubDate":'12-02',"docabs":'央视网消息（记者 刘春妍）伟大的变革——庆祝改革开放40周年大型展览第四展区“历史巨变”。这个展区集中展示改革开放40年来展览图片。更多精彩内容请点击浏览：【专题】伟大的变革——庆祝改革开放40周年大型展...',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181202489229911863.jpg'});						   
                                   
	  dataList.push({"title":'改革开放40年 科技工作新春天',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181202_11801645.htm',"source":'光明网-《光明日报》',"pubDate":'12-02',"docabs":'1978年，当改革开放的春风吹遍神州大地，全国科学大会召开，拉开了科技体制改革的序幕。《光明日报》（2018年12月02日03版）.',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181202484695138681.jpg'});						   
                                   
	  dataList.push({"title":'“三权分置”盘活农村资源助力乡村振兴',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181202_11801642.htm',"source":'新华网',"pubDate":'12-02',"docabs":'河南荣俊农业有限公司自建的粮仓（11月29日摄）。 新华社记者 刘高阳 摄新华社郑州12月1日电（记者刘高阳、孙清清）“集中流转、集中整理、集中再流转”，2016年8月以来，河南邓州市以孟楼镇为试点“三权分置”促...',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181202484402985337.jpg'});						   
                                   
	  dataList.push({"title":'自贸区：对标国际 打造一流营商环境',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181202_11801640.htm',"source":'央视网',"pubDate":'12-02',"docabs":'央视网消息（新闻联播）：率先形成法治化、国际化、便利化的营商环境，加快形成公平、统一、高效的市场环境是自贸区诞生时就肩负的使命。',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181202483263498182.jpg'});						   
                                   
	  dataList.push({"title":'浙江：“最多跑一次”改革向纵深推进',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181202_11801638.htm',"source":'央视网',"pubDate":'12-02',"docabs":'央视网消息（新闻联播）：浙江出台保障“最多跑一次”改革规定，推动立法决策与改革决策相衔接，保障“最多跑一次”改革向纵深推进。',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181202482985568635.jpg'});						   
                                   
	  dataList.push({"title":'广州创新社会共享机制提高群众幸福感',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181201_11801432.htm',"source":'新华网',"pubDate":'12-01',"docabs":'城市环境改善痛点怎么解决？养老服务热点如何破题？城市发展怎样兼顾外来人口归属感？……近年来，改革开放前沿城市广州多举措创新打造社会共享机制11月29日一早，广州市荔湾区逢源街厚福社区居民委员会热闹非凡...',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181201805224802893.png'});						   
                                   
	  dataList.push({"title":'世界艾滋病日：我国艾滋病经血液传播基本阻断',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181201_11801430.htm',"source":'央视网',"pubDate":'12-01',"docabs":'央视网消息：国家卫健委今天表示，我国艾滋病防控政策日益完善，防治经费逐年增加，输血传播基本阻断，全面实施了临床用血艾滋病病毒核酸检测全覆盖，经输血及使用血液制品传播病例接近零报告。除了经输血传播，...',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181201804738762428.png'});						   
                                   
	  dataList.push({"title":'一个艾滋病毒的自白',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181201_11801399.htm',"source":'新华网',"pubDate":'12-01',"docabs":'是人类免疫缺陷病毒存活艾滋病感染者约125万人性传播是主要传播途径你应该知道我是怎样找到人类宿主的吧？对，除了性传播还有血液传播、母婴传播等途径我一旦侵入你们的细胞阻断我的传播但是呢今天，是第31个世界...',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181201647519191174.jpg'});						   
                                   
	  dataList.push({"title":'快来看这些让西班牙汉学家"爱得深沉"的中国文化',"link":'http://news.youth.cn/gn/201812/t20181201_11801271.htm',"source":'中国青年网',"pubDate":'12-01',"docabs":'',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181201642702104203.png'});						   
                                   
	  dataList.push({"title":'张宇燕：中国对外开放的理论逻辑',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181201_11801342.htm',"source":'中国社会科学网',"pubDate":'12-01',"docabs":'对外开放促进经济社会进步和国家繁荣发展，这是被古今中外的经济理论和发展实践所证明的深刻道理。马克思曾明确地把国际经济关系列入政治经济学的研究框架之中。中国对外开放实践与中国传统中的贸易思想高度吻合...',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181201565192963561.jpg'});						   
                                   
	  dataList.push({"title":'《共产党宣言的味道》获奖 时政微视频受肯定',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181201_11801340.htm',"source":'央视新闻客户端',"pubDate":'12-01',"docabs":'“你好，新时代！”青年创意微视频大赛颁奖典礼近日在京落下帷幕，时政微视频《共产党宣言的味道》获得“评委会特别推荐奖”一等奖。2012年11月29日，习近平在带领十八届中共中央政治局常委参观《复兴之路》展览...',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181201564698367921.png'});						   
                                   
	  dataList.push({"title":'山水风光唱新歌（辉煌60年·壮美新广西）',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181201_11801338.htm',"source":'人民网－人民日报',"pubDate":'12-01',"docabs":'“唱山歌咧，这边唱来那边和，山歌好比春江水……”11月2日，北京梅兰芳大剧院，6位不同时期的“刘三姐”文化为山水风光插上翅膀，助推广西旅游业腾飞。在桂林阳朔，世界首台山水实景演出《印象·刘三姐》从2004...',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181201563145262307.png'});						   
                                   
	  dataList.push({"title":'引领世界经济航船驶向更加广阔的大海',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181201_11801336.htm',"source":'央视网',"pubDate":'12-01',"docabs":'11月30日，出席在布宜诺斯艾利斯举行的二十国集团领导人峰会的中国国家主席习近平，在第一阶段会议上发表题为《登高望远，牢牢把握世界经济正确方向》.',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181201561974631104.png'});						   
                                   
	  dataList.push({"title":'严把德才标准造就高素质干部队伍',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181201_11801334.htm',"source":'光明网',"pubDate":'12-01',"docabs":'11月26日，习近平总书记在中共中央政治局第十次集体学习时指出：“严把德才标准，坚持公正用人，拓宽用人视野坚持以德为先，培育干部崇高的道德信仰。立信先立德，良好的道德信仰是干部以德修身、政治坚定、踏实...',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181201561077126207.png'});						   
                                   
	  dataList.push({"title":'中国与G20同行 始终给全球经济注入动力和信心',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181201_11801331.htm',"source":'央广网',"pubDate":'12-01',"docabs":'二十国集团领导人第十三次峰会11月30日开始在阿根廷首都布宜诺斯艾利斯举行。',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181201559790962553.png'});						   
                                   
	  dataList.push({"title":'外国人在中国追梦',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181201_11801324.htm',"source":'人民网',"pubDate":'12-01',"docabs":'波兰姑娘亚历山德拉毕业于波兰格斯克音乐学院小提琴演奏专业，她于2014年到2017年间在中国贵阳管弦乐团工作。亚历山德拉从国家大剧院前走过。新华社记者 张晨霖摄亚历山德拉（左一）和国家大剧院管弦乐团的同事们...',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181201545241790728.jpg'});						   
                                   
	  dataList.push({"title":'改革红利持续释放 多地新政送出民生“大礼包”',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181201_11801321.htm',"source":'新华网',"pubDate":'12-01',"docabs":'新华网北京12月1日电（王莹）60岁老人可免费乘车逛公园、电动车最高时速25公里且不得改装、公安派出所8类证明全部“一网通一次办”......近期浙江：启动电动自行车新国标过渡期 最高时速25公里且不得改装',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181201544689263898.jpg'});						   
                                   
	  dataList.push({"title":'公共文化事业不断进步 文化走出去亮点纷呈',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181201_11801319.htm',"source":'新华网',"pubDate":'12-01',"docabs":'',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181201544192741978.png'});						   
                                   
	  dataList.push({"title":'“此身许国，亦能许卿。”',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181201_11801316.htm',"source":'新华社',"pubDate":'12-01',"docabs":'我的是《我的祖国》指代祖国为什么不是“一条黄河”就代表着祖国。”也表达了对祖国的依恋在“此身许国，亦能许卿”的这些年一直在非洲，每当有朋友问我是哪国人时，我都会自豪地说出两个字——中国。我为你流泪...',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181201543311427505.png'});						   
                                   
	  dataList.push({"title":'彭仁发：勇于为航空事业奋斗一生',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181201_11801311.htm',"source":'光明网-《光明日报》',"pubDate":'12-01',"docabs":'乌鲁木齐市烈士陵园里松柏林立,肃穆安静，彭仁发烈士墓就位于此处。',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181201540837670037.png'});						   
                                   
	  dataList.push({"title":'警惕历史虚无主义对青年群体的四大侵蚀',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181201_11801309.htm',"source":'求是网',"pubDate":'12-01',"docabs":'青年是国家的希望和民族的未来，培养具有执着信念、优良品德、丰富知识和过硬本领的青年一代是新时代教育的责任和使命。',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181201540471864341.png'});						   
                                   
	  dataList.push({"title":'带你读懂《中国共产党支部工作条例(试行)》下篇',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181201_11801307.htm',"source":'人民网-中国共产党新闻网',"pubDate":'12-01',"docabs":'',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181201537840792264.png'});						   
                                   
	  dataList.push({"title":'把改革开放的旗帜举得更高更稳',"link":'http://m.youth.cn/qwtx/xxl/201812/t20181201_11801305.htm',"source":'求是',"pubDate":'12-01',"docabs":'前不久，在改革开放先行地广东考察时，习近平总书记再次强调中国改革不停顿、开放不止步，要求不忘改革开放初心，认真总结改革开放40年成功经验，提升改革开放质量和水平，把改革开放的旗帜举得更高更稳。',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181201537019723239.jpg'});						   
                                   
	  dataList.push({"title":'中国快递业高速发展见证40年伟大跨越',"link":'http://news.youth.cn/gn/201812/t20181201_11801212.htm',"source":'央视网',"pubDate":'12-01',"docabs":'',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181201380072750218.png'});						   
                                   
	  dataList.push({"title":'探索深空！在国博感受长征系列运载火箭的魅力',"link":'http://news.youth.cn/gn/201812/t20181201_11801213.htm',"source":'新华网',"pubDate":'12-01',"docabs":'',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181201379450656914.png'});						   
                                   
	  dataList.push({"title":'"红包"落袋！个税改革实施首月减税316亿元',"link":'http://news.youth.cn/gn/201812/t20181201_11801215.htm',"source":'人民日报',"pubDate":'12-01',"docabs":'',"thumb1":'http://m.youth.cn/qwtx/xxl/201812/W020181201378208510198.png'});						   
           			
	                                $(window).scroll(function(){  
					// 当滚动到最底部以上n像素时， 加载新内容  
					if ($(document).height() - $(this).scrollTop() - $(this).height()<80) {  
       		                                if($("#loading a").text != '没有更多内容')
                                                  {
							        var  div_num=$("#info_text li").length;//获取已显示的div 个数
									  if (dataList.length-div_num<=moreNum)//最后一次加载
									  {
										  moreNum=dataList.length-div_num;
										  $("#loading a").text('没有更多内容');//隐藏显示更多
                                                                           
									  }
									  handler.more(div_num,moreNum);

                                                   }else
                                                  {return;}
							   }  
							   });	
						 var handler={
                                                      add_ad:function(num_index)
							  {  
for (var i=0;i<addment_arr.length;i++)
{
if(i==0)
{
var script = document.createElement("script");
script.type = "text/javascript";
script.src = "//pb1.qujishu.com/vrdicaeb8x.js";
document.getElementById('article_ad'+addment_arr[i]).appendChild(script);
}else if(i==1)
{
var script = document.createElement("script");
script.type = "text/javascript";
script.src = "//pb1.qujishu.com/ojyrrfpgkmqybf.js";
document.getElementById('article_ad'+addment_arr[i]).appendChild(script);
}
else
{
var script = document.createElement("script");
script.type = "text/javascript";
script.src = "//pb1.qujishu.com/vrdicaeb8x.js";
document.getElementById('article_ad'+addment_arr[i]).appendChild(script);
}
}
	  
							  },
							tmpl:function(num_index,moreNum)//html语法生成+
							{ 
							  var dom="";addment_arr.length=0;
								for(var i=num_index;i<num_index+moreNum;i++)
								{ 
                                                                   dom=dom+handler.list(dataList[i]);
                                                                   if((i==2 || i%5==0) && i!=0)
                                                                    {
                                                                     addment_arr.push(i);
                                                                     dom=dom+'<div id=article_ad'+i+'></div>';

                                                                    }
								}
								
								return dom;
							},
							list:function(option)//拼接html每条代码
							{   		
							    var templateString="";
							    option.thumb1==''?templateString=handler.get_info_list(option):templateString=handler.get_one_list(option);					
								return templateString;
							},

							get_one_list:function(option)
							{ 
								
								var templateString = "";
								templateString=' <li class="thumb-item"><div class="thumb-img"><a href="'+option.link+'"> <img src="'+option.thumb1+'" border="0" /> </a></div><div class="thumb-info"> <h3 class="thumb-tit"><a href="'+option.link+'">'+option.title+'</a></h3><div class="thumb-extra"> <span class="keyword">'+option.source+'</span> <span class="source">'+option.pubDate+'</span> </div></div></li>';	
								return templateString;
							},
							get_info_list:function(option)
							{
								var templateString = "";
								templateString=' <li class="only_txt">  <h3 class="thumb-p3-tit-txt"> <a href="'+option.link+'">'+option.title+'</a></h3><div class="thumb-info-txt"><div class="thumb-extra-txt"> <span class="keyword">'+option.source+'</span> <span class="source">'+option.pubDate+'</span></div></div></li> ';	
								return templateString;
							},
							more:function(div_num,moreNum)//点击加载更多加载新闻列表
							{	
								var domList = handler.tmpl(div_num,moreNum);						
								$("#info_text").append(domList);
                                                                handler.add_ad();
							}
						 }
						  });