$(function(){
	$('.loading-cloud').velocity({
	'background-position':'100%'},{duration:16000,loop:true});
	//第一步:写一个图的加载,获得所有的<img>
	var img = new Image();
	var scale = $(window).width()/320;
	//答题数计数
	var count = 0,
		correctCount = 0;

	//第二步:写多个图的loading
	var pics = ['css/answer_allopen_bg.png','css/answer_bg.png','css/answer_cat.png','css/answer_correct.png','css/answer_failed_bg.png','css/answer_rui.png','css/answer_success_bg.png','css/answer_wen.png','css/answer_wrong.png','css/answer_zhi.png','css/answer_zhong.png','css/choose_bg.png','css/choose_boy.png','css/choose_girl.png','css/cover_bg.png','css/cover_clou1.png','css/cover_clou2.png','css/cover_clou3.png','css/cover_clou4.png','css/cover_text.png','css/leaf1.png','css/leaf2.png','css/leaf3.png','css/loading_bg.png','css/loading_cloud.png','css/main.css','css/mainscene_bg.png','css/mainscene_rui.png','css/mainscene_rui_bi.png','css/mainscene_table.png','css/mainscene_tips1.png','css/mainscene_tips2.png','css/mainscene_tips3.png','css/mainscene_tips4.png','css/mainscene_upgrade.png','css/mainscene_wen.png','css/mainscene_wen_zhi.png','css/mainscene_xing.png','css/mainscene_xing_cat.png','css/mainscene_zhi.png','css/mainscene_zhi_hua.png','css/mainscene_zhong.png','css/mainscene_zhong_bian.png','css/me_bottom.png','css/me_close.png','css/memorial_1.png','css/memorial_2.png','css/memorial_3.png','css/memorial_4.png','css/memorial_bg.png','css/memorial_up_btn.png','css/ms_chakanzouzhang.png','css/ms_guifei.png','css/ms_huangdi.png','css/ms_nvwang.png','css/ms_taijian.png','css/ms_xianling.png','css/ms_xiaojie.png','css/ms_xiaozhu.png','css/ms_yatou.png','css/ms_yayi.png','css/ms_zaixiang.png','css/pop_renwu_bg.png','css/share.jpg','css/share.png','css/share_btn.png','css/upgrade_btn.png'],
		 index = 0;
	//循环速度要快于加载
	for(var i = 0; i < pics.length; i++){
		var img = new Image();
		img.onload = function(){
		//onloading 为异步加载，循环执行的时候需要设置计数器
		index++;
		if(index+1< pics.length){
			$('.loading-text p').eq(1).html(parseInt((index/pics.length)*100) + '%')
		}else{
			$('.loading-text p').eq(1).html('100%');
			setTimeout(function(){
				$('.loading').hide();
				$('.cover').show();
				$('.cover-text').addClass('covertextan');
				},1000)
				// $('.loading').hide();
				// $('.cover').show();
				// $('.cover-text').addClass('covertextan');
				setTimeout(function(){
					$('.choose ').show();
					$('.item-warp ul').css({'transform':'translateY('
						//第一帧，li为position:relative;
						+-$(window).height()+'px)' })
				}, 1000);
		}
		//计算进度条百分比
	}
	img.src = pics[i];
	}
	


	//选择页面男女按钮
	var gender;
	$('.choose').on('click', '.ac_choose', function(){
		gender = $(this).data('gender');
		if(gender == 'girl'){
			$('.person').addClass('yatou')
		}
		$('.main').show();
		$('.item-warp ul').css({'transform':'translateY('
		//乘2 第二帧
		 +-$(window).height()*2 +'px)'});
	});
	//页面缩放，适配所有手机
	//比例值，按照比例值缩放
	//以中心点为基准缩放，修改中心点，整评滑动height为100%
	//改变原始的样式，transform scale缩放的样式
	//做缩放处理中的元素用position防止裁切掉
	$('li.main .scale').css({'transform':'scale('+scale+')' });



	//主场景

	//主场景人物动画
	function personAn(){
		$('.person,main-xingcat').css({'background-position' :'0,0'});
		setTimeout(function(){
			$('.person,main-xingcat').css({'background-position' :'100%,0%'});
		},600);
		setTimeout(function(){
			personAn();
		},1200);
	}
	personAn();
	//主场景叶子动画
	function leafAn(opt){
		//多片叶子掉落
		var element = opt.element,
			//结束时点的位置
			endleft = opt.endleft,
			endbottom = opt.endbottom,
			//开始时点的位置
			startleft = opt.startleft,
			startbottom = opt.startbottom,
			duration = opt.duration;
		$(element).velocity('fadeIn',{duration:1000,complete:function(target){
			$(target).velocity({left:endleft,bottom:endbottom},{duration:duration,complete:function(target){
				//淡出回调函数
				$(target).velocity('fadeOut',{complete:function(){
					//重置叶子动画
					$(target).velocity({left:startleft,bottom:startbottom},{duration:1,complete:function(){
						leafAn({element:element,endleft:endleft,endbottom:endbottom,startleft:startleft,startbottom:startbottom,duration:duration});
					}});
				}})		
			}});
		}})
		//一片叶子
		//淡入回调函数
		// $('.main-leaf1').velocity('fadeIn',{duration:1000,complete:function(target){
		// 	$(target).velocity({left:'5%',bottom:'20%'},{duration:10000,complete:function(target){
		// 		//淡出回调函数
		// 		$(target).velocity('fadeOut',{complete:function(){
		// 			//重置叶子动画
		// 			$(target).velocity({left:'20%',bottom:'70%'},{duration:1,complete:function(){
		// 				leafAn();
		// 			}});
		// 		}})		
		// 	}});
		// }})
	}
	leafAn({element:'.main-leaf1',endleft:'5%',endbottom:'20%',startleft:'20%',startbottom:'80%',duration:'10000'});
	leafAn({element:'.main-leaf2',endleft:'40%',endbottom:'15%',startleft:'50%',startbottom:'90%',duration:'15000'});
	leafAn({element:'.main-leaf3',endleft:'70%',endbottom:'20%',startleft:'80%',startbottom:'60%',duration:'8000'});

	//主场景页面底部button事件
	var from ='';
	$('.main').on('click', '.ac_dati', function(){
		//this代表.ac_dati；
		//表达式的值为zhong，data-所匹配的属性名；
		//在主场景页点击'.ac_dati'，跳转至答题页，答题后回跳至主场景的同时改变所选题目的图标，状态变为已答过。所选的'.ac_dati'，已通过 $(this).data('dati-f')确定。

		//点击其他选项之前reset 答题页，结果页和升级页
		$('.opt').css({'background-color':'#e0ded7'}).find('div').hide();
		$('.result,.result-person,.result-incorrect').hide();
		//点击答题按钮是将答题数和正确答题数清零
		count = 0;
		correctCount = 0;
		//
		from = $(this).data('dati-f');
		if(from == "renwushengji"){	
			_init_dati(0,'renwu');
		}else{
			_init_dati(0,'daoju');
		}
		$('.dati').show();
		//乘3 第三帧 答题页出现
		$('.item-warp ul').css({'transform':'translateY('
		 +-$(window).height()*3 +'px)' });
	});
	

	//答题页
	//答题页点击事件
	//映射
	var map_dati = {
		'zhong':{
			'main':'.main-zhongbian',
			'result':{
				'pic':'.prop',
				'word':'.result-text',
				'picClassName':'result-zhongbian',
				'wordText':'获得匾额'
			},
		},
		'zhi':{
			'main':'.main-zhipingfeng',
			'result':{
				'pic':'.prop',
				'word':'.result-text',
				'picClassName':'result-zhipingfeng',
				'wordText':'获得屏风'
			}
		},
		'rui':{
			'main':'.main-ruibi',
			'result':{
				'pic':'.prop',
				'word':'.result-text',
				'picClassName':'result-ruibi',
				'wordText':'获得毛笔'
			},
		},
		'xing':{
			'main':'.main-xingcat',
			'result':{
				'pic':'.prop',
				'word':'.result-text',
				'picClassName':'result-xingcat',
				'wordText':'获得猫咪'
			},
		},
		'wen':{
			'main':'.main-wenzhi',
			'result':{
				'pic':'.prop',
				'word':'.result-text',
				'picClassName':'result-wenzhi',
				'wordText':'获得宣纸'
			},
		},
		'renwushengji':{
			'main':{
				'person':'.person',
				'personClassName':'yayi'
			},
			'result':{
				'level':'.result-person-level',
				'levelText':'衙役'
			}
		}
	}
	
	//主函数
	//答题页——选定某一种答题后主页面+结果页的变化
	$('.dati').on('click', '.opt', function(){
		var $t = $(this);
		//iscorrect缓存
		var iscorrect = ($t.data('opt') == $t.closest('.result-options').data('rightChoose'))? true : false;
		var isfinished;
		//判断对错icon
		if($t.data('opt') == $t.closest('.result-options').data('rightChoose')){
			console.log('correct');
			$t.find('div').attr('class','').addClass('correct');
		}else{
			$t.find('div').attr('class','').addClass('incorrect');
					}
		$(this).css({'background-color':'#fff'})//链式结构
		//complete()函数，fadeIn结束后会执行函数中的方法
		.find('div').velocity('fadeIn',{complete:function(){
				if(from == "renwushengji"){
				//人物升级
					//人物升级何时结束
					isfinished = (count ==5)?true:false;
					if(isfinished){
						//判断正确答题数
						if(iscorrect){
							correctCount++
						}
						$('.result-person-title').text('答对' + correctCount + '题');
						if(gender == 'boy'){
							if(correctCount == 1){
								$('.result-person-level').text('太监');
								$('.person').attr('class','person')
								.addClass('taijian');
								$('.result-person').velocity('fadeIn',{complete:function(){
								setTimeout(function(){
									$('.item-warp ul').css({'transform':'translateY('
									//回跳一帧
					 				+-$(window).height()*2 +'px)' });},1000); 
								}});
							}else if(correctCount == 2){
								$('.result-person-level').text('衙役');
								$('.person').attr('class','person')
								.addClass('yayi');
								$('.result-person').velocity('fadeIn',{complete:function(){
								setTimeout(function(){
									$('.item-warp ul').css({'transform':'translateY('
									//回跳一帧
					 				+-$(window).height()*2 +'px)' });},1000); 
								}});
							}else if (correctCount == 3) {
								$('.result-person-level').text('县令');
								$('.person').attr('class','person')
								.addClass('xianling');
								$('.result-person').velocity('fadeIn',{complete:function(){
								setTimeout(function(){
									$('.item-warp ul').css({'transform':'translateY('
									//回跳一帧
					 				+-$(window).height()*2 +'px)' });},1000); 
								}});
							}else if (correctCount == 4) {
								$('.result-person-level').text('宰相');
								$('.person').attr('class','person')
								.addClass('zaixiang');
								$('.result-person').velocity('fadeIn',{complete:function(){
									setTimeout(function(){
									$('.item-warp ul').css({'transform':'translateY('
									//回跳一帧
					 				+-$(window).height()*2 +'px)' });},1000); 
								}});
							}else if(correctCount == 5) {
								$('.result-person-level').text('皇帝');
								$('.person').attr('class','person')
								.addClass('huangdi');
								$('.result-person').velocity('fadeIn',{complete:function(){
								setTimeout(function(){
									$('.item-warp ul').css({'transform':'translateY('
									//回跳一帧
					 				+-$(window).height()*2 +'px)' });}, 1000); 
								}});
							};
						}else{
							if(correctCount == 1){
								$('.result-person-level').text('丫头');
								$('.person').attr('class','person')
								.addClass('yatou');
								$('.result-person').velocity('fadeIn',{complete:function(){
								setTimeout(function(){
									$('.item-warp ul').css({'transform':'translateY('
									//回跳一帧
					 				+-$(window).height()*2 +'px)' });},1000); 
								}});
							}else if(correctCount == 2){
								$('.result-person-level').text('小姐');
								$('.person').attr('class','person')
								.addClass('xiaojie');
								$('.result-person').velocity('fadeIn',{complete:function(){
								setTimeout(function(){
									$('.item-warp ul').css({'transform':'translateY('
									//回跳一帧
					 				+-$(window).height()*2 +'px)' });},1000); 
								}});
							}else if (correctCount == 3) {
								$('.result-person-level').text('小主');
								$('.person').attr('class','person')
								.addClass('xiaozhu');
								$('.result-person').velocity('fadeIn',{complete:function(){
								setTimeout(function(){
									$('.item-warp ul').css({'transform':'translateY('
									//回跳一帧
					 				+-$(window).height()*2 +'px)' });},1000); 
								}});
							}else if (correctCount == 4) {
								$('.result-person-level').text('贵妃');
								$('.person').attr('class','person')
								.addClass('guifei');
								$('.result-person').velocity('fadeIn',{complete:function(){
									setTimeout(function(){
									$('.item-warp ul').css({'transform':'translateY('
									//回跳一帧
					 				+-$(window).height()*2 +'px)' });},1000); 
								}});
							}else if(correctCount == 5) {
								$('.result-person-level').text('女王');
								$('.person').attr('class','person')
								.addClass('nvwang');
								$('.result-person').velocity('fadeIn',{complete:function(){
								setTimeout(function(){
									$('.item-warp ul').css({'transform':'translateY('
									//回跳一帧
					 				+-$(window).height()*2 +'px)' });}, 1000); 
								}});
							};
						}
								
				}else{
					//继续答题
					if(iscorrect){
						correctCount++
					}
					//继续下一题
					_init_dati(count,'renwu');
			    }
					
			}else{
				//道具升级
				//count原是2，异步的问题coun++在前以执行
				//道具升级何时结束
				isfinished = (count ==3)?true:false;
				if(isfinished){
					//判断正确答题数
					if(iscorrect){
						correctCount++
						}
					//判断是否答题完成并跳出结果页
					if(correctCount >= 2){
						//解锁成功-页面内容数据调取
						$(map_dati[from]['result']['pic']).attr('class','prop')//attr()样式初始化
						.addClass(map_dati[from]['result']['picClassName']);
						$(map_dati[from]['result']['word']).text(map_dati[from]['result']['wordText']);
						//解锁成功-滑动到主场景
						$('.result').velocity('fadeIn',{complete:function(){
							setTimeout(function(){
								$('.item-warp ul').css({'transform':'translateY('
								//回跳一帧
								+-$(window).height()*2 +'px)' });},1000);
								//setTimeout:1000ms+淡入动画500ms，忠匾出现后再修改点亮内容
							$(map_dati[from]['main']).velocity('fadeIn', {delay:1600,complete:function(){
								$('.' + from).css({'background-position' : 'center bottom'});
							}})
						}});
					}else{
						//解锁失败滑动页面到主场景
						$('.result-incorrect').velocity('fadeIn',{complete:function(){
						setTimeout(function(){
							$('.item-warp ul').css({'transform':'translateY('+-$(window).height()*2 + 'px)'})},1000);
						}});
					}		
				}else{
					//继续答题
					if(iscorrect){
						correctCount++
					}
					//继续下一题
					_init_dati(count,'daoju');
			    }
			}						
		}});
		//count与complete异步
		count++;
	});
	//答题页缩放,包了一层.scale防止背景缩放
		$('li.dati .dati-wrap').css({transform:'scale('+scale+')'});
	//题目数据
	var data = {
		daoju:[{
			id:1,
			question:'1.关于黄圣依和杨子的感情，以下哪种观点没有在《大家》提起过?',
			options:{
				A:'选项A关于黄圣依和杨子的感情，以下哪种观点没',
				B:'选项B',
				C:'选项C'
			},
			rightChoose:'A'
		},
		{
			id:2,
			question:'2.关于黄圣依和杨子的感情，以下哪种观点没有在《大家》提起过?',
			options:{
				A:'选项A关于黄圣依和杨子的感情，以下哪种观点没',
				B:'选项B',
				C:'选项C'
			},
			rightChoose:'A'
		},
		{
			id:3,
			question:'3.关于黄圣依和杨子的感情，以下哪种观点没有在《大家》提起过?',
			options:{
				A:'选项A关于黄圣依和杨子的感情，以下哪种观点没',
				B:'选项B',
				C:'选项C'
			},
			rightChoose:'A'
		}
	],
	renwu:[{
			id:1,
			question:'1.关于黄圣依和杨子的感情，以下哪种观点没有在《大家》提起过?',
			options:{
				A:'选项A关于黄圣依和杨子的感情，以下哪种观点没',
				B:'选项B',
				C:'选项C'
			},
			rightChoose:'A'
		},
		{
			id:2,
			question:'2.关于黄圣依和杨子的感情，以下哪种观点没有在《大家》提起过?',
			options:{
				A:'选项A关于黄圣依和杨子的感情，以下哪种观点没',
				B:'选项B',
				C:'选项C'
			},
			rightChoose:'A'
		},
		{
			id:3,
			question:'3.关于黄圣依和杨子的感情，以下哪种观点没有在《大家》提起过?',
			options:{
				A:'选项A关于黄圣依和杨子的感情，以下哪种观点没',
				B:'选项B',
				C:'选项C'
			},
			rightChoose:'A'
		},
		{
			id:4,
			question:'4.关于黄圣依和杨子的感情，以下哪种观点没有在《大家》提起过?',
			options:{
				A:'选项A关于黄圣依和杨子的感情，以下哪种观点没',
				B:'选项B',
				C:'选项C'
			},
			rightChoose:'A'
		},
		{
			id:5,
			question:'5.关于黄圣依和杨子的感情，以下哪种观点没有在《大家》提起过?',
			options:{
				A:'选项A关于黄圣依和杨子的感情，以下哪种观点没',
				B:'选项B',
				C:'选项C'
			},
			rightChoose:'A'
		}
	]
	};
	//页面渲染数据→DOM节点
	function _init_dati(index,dataName){
		$('.num-count').text((index+1)+ '/' + data[dataName].length);
		setTimeout(function(){
			$('.opt').css({'background-color':'#e0ded7'}).find('div').hide()
		},500);
		//提前写出正确答案，避免二次调用数据
		$('.result-options').data('rightChoose',data[dataName][index]['rightChoose'])
		$('.title').html(data[dataName][index]['question']);
	var map_opts = ['A','B','C'];
	//页面渲染-题目内容取值
	for(var i = 0; i < document.querySelectorAll('.opt').length;i++){
		$('.opt span').eq(i).html(data[dataName][index]['options'][map_opts[i]]);
		}
	}

})