(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 640,
	height: 1136,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/a.png", id:"a"},
		{src:"images/b.png", id:"b"},
		{src:"images/c.png", id:"c"},
		{src:"images/count_bg.png", id:"count_bg"},
		{src:"images/count_man.png", id:"count_man"},
		{src:"images/count_man_2.png", id:"count_man_2"},
		{src:"images/count_man_3.png", id:"count_man_3"},
		{src:"images/count_txt.png", id:"count_txt"},
		{src:"images/cover_bg_1.png", id:"cover_bg_1"},
		{src:"images/cover_bg_2.png", id:"cover_bg_2"},
		{src:"images/cover_bg_top.png", id:"cover_bg_top"},
		{src:"images/cover_bg_toppng复制.png", id:"cover_bg_toppng复制"},
		{src:"images/cover_man_1.png", id:"cover_man_1"},
		{src:"images/cover_man_2.png", id:"cover_man_2"},
		{src:"images/cover_title.png", id:"cover_title"},
		{src:"images/cp_1.png", id:"cp_1"},
		{src:"images/cp_2.png", id:"cp_2"},
		{src:"images/cp_3.png", id:"cp_3"},
		{src:"images/d.png", id:"d"},
		{src:"images/denglong.png", id:"denglong"},
		{src:"images/dl_bottom.png", id:"dl_bottom"},
		{src:"images/dl_top.png", id:"dl_top"},
		{src:"images/q1_a.png", id:"q1_a"},
		{src:"images/q1_b.png", id:"q1_b"},
		{src:"images/q1_c.png", id:"q1_c"},
		{src:"images/q1_d.png", id:"q1_d"},
		{src:"images/q2_a.png", id:"q2_a"},
		{src:"images/q2_b.png", id:"q2_b"},
		{src:"images/q2_c.png", id:"q2_c"},
		{src:"images/q2_d.png", id:"q2_d"},
		{src:"images/q3_a.png", id:"q3_a"},
		{src:"images/q3_b.png", id:"q3_b"},
		{src:"images/q3_c.png", id:"q3_c"},
		{src:"images/q3_d.png", id:"q3_d"},
		{src:"images/q4_a.png", id:"q4_a"},
		{src:"images/q4_b.png", id:"q4_b"},
		{src:"images/q4_c.png", id:"q4_c"},
		{src:"images/q4_d.png", id:"q4_d"},
		{src:"images/r1_l.png", id:"r1_l"},
		{src:"images/r1_r.png", id:"r1_r"},
		{src:"images/r2_l.png", id:"r2_l"},
		{src:"images/r2_r.png", id:"r2_r"},
		{src:"images/r3_l.png", id:"r3_l"},
		{src:"images/r3_r.png", id:"r3_r"},
		{src:"images/r4_l.png", id:"r4_l"},
		{src:"images/r4_r.png", id:"r4_r"},
		{src:"images/r_man_1.png", id:"r_man_1"},
		{src:"images/r_man_2_1.png", id:"r_man_2_1"},
		{src:"images/r_man_2_2.png", id:"r_man_2_2"},
		{src:"images/r_man_3.png", id:"r_man_3"},
		{src:"images/result_b_2.png", id:"result_b_2"},
		{src:"images/topic_1_bg1.png", id:"topic_1_bg1"},
		{src:"images/topic_1_bg2.png", id:"topic_1_bg2"},
		{src:"images/topic_2_bg1.png", id:"topic_2_bg1"},
		{src:"images/topic_2_bg2.png", id:"topic_2_bg2"},
		{src:"images/topic_2_bg3.png", id:"topic_2_bg3"},
		{src:"images/topic_2_bg4.png", id:"topic_2_bg4"},
		{src:"images/topic_3_bg1.png", id:"topic_3_bg1"},
		{src:"images/topic_3_bg2.png", id:"topic_3_bg2"},
		{src:"images/topic_4_bg1.png", id:"topic_4_bg1"},
		{src:"images/topic_4_bg2.png", id:"topic_4_bg2"},
		{src:"images/zhz.png", id:"zhz"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.a = function() {
	this.initialize(img.a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,71);


(lib.b = function() {
	this.initialize(img.b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,71);


(lib.c = function() {
	this.initialize(img.c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,71);


(lib.count_bg = function() {
	this.initialize(img.count_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.count_man = function() {
	this.initialize(img.count_man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,290);


(lib.count_man_2 = function() {
	this.initialize(img.count_man_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,290);


(lib.count_man_3 = function() {
	this.initialize(img.count_man_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,290);


(lib.count_txt = function() {
	this.initialize(img.count_txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,259,331);


(lib.cover_bg_1 = function() {
	this.initialize(img.cover_bg_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.cover_bg_2 = function() {
	this.initialize(img.cover_bg_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.cover_bg_top = function() {
	this.initialize(img.cover_bg_top);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,178);


(lib.cover_bg_toppng复制 = function() {
	this.initialize(img.cover_bg_toppng复制);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,178);


(lib.cover_man_1 = function() {
	this.initialize(img.cover_man_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,677);


(lib.cover_man_2 = function() {
	this.initialize(img.cover_man_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,677);


(lib.cover_title = function() {
	this.initialize(img.cover_title);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,525,413);


(lib.cp_1 = function() {
	this.initialize(img.cp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,450);


(lib.cp_2 = function() {
	this.initialize(img.cp_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,450);


(lib.cp_3 = function() {
	this.initialize(img.cp_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,450);


(lib.d = function() {
	this.initialize(img.d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,71);


(lib.denglong = function() {
	this.initialize(img.denglong);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,480);


(lib.dl_bottom = function() {
	this.initialize(img.dl_bottom);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,34);


(lib.dl_top = function() {
	this.initialize(img.dl_top);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,34);


(lib.q1_a = function() {
	this.initialize(img.q1_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q1_b = function() {
	this.initialize(img.q1_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q1_c = function() {
	this.initialize(img.q1_c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q1_d = function() {
	this.initialize(img.q1_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q2_a = function() {
	this.initialize(img.q2_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q2_b = function() {
	this.initialize(img.q2_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q2_c = function() {
	this.initialize(img.q2_c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q2_d = function() {
	this.initialize(img.q2_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q3_a = function() {
	this.initialize(img.q3_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q3_b = function() {
	this.initialize(img.q3_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q3_c = function() {
	this.initialize(img.q3_c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q3_d = function() {
	this.initialize(img.q3_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q4_a = function() {
	this.initialize(img.q4_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q4_b = function() {
	this.initialize(img.q4_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q4_c = function() {
	this.initialize(img.q4_c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q4_d = function() {
	this.initialize(img.q4_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.r1_l = function() {
	this.initialize(img.r1_l);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,540);


(lib.r1_r = function() {
	this.initialize(img.r1_r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,539);


(lib.r2_l = function() {
	this.initialize(img.r2_l);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,540);


(lib.r2_r = function() {
	this.initialize(img.r2_r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,539);


(lib.r3_l = function() {
	this.initialize(img.r3_l);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,540);


(lib.r3_r = function() {
	this.initialize(img.r3_r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,539);


(lib.r4_l = function() {
	this.initialize(img.r4_l);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,540);


(lib.r4_r = function() {
	this.initialize(img.r4_r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,539);


(lib.r_man_1 = function() {
	this.initialize(img.r_man_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,362,417);


(lib.r_man_2_1 = function() {
	this.initialize(img.r_man_2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,299,517);


(lib.r_man_2_2 = function() {
	this.initialize(img.r_man_2_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,299,517);


(lib.r_man_3 = function() {
	this.initialize(img.r_man_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,331,501);


(lib.result_b_2 = function() {
	this.initialize(img.result_b_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,264,80);


(lib.topic_1_bg1 = function() {
	this.initialize(img.topic_1_bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,553,425);


(lib.topic_1_bg2 = function() {
	this.initialize(img.topic_1_bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,553,425);


(lib.topic_2_bg1 = function() {
	this.initialize(img.topic_2_bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,520,421);


(lib.topic_2_bg2 = function() {
	this.initialize(img.topic_2_bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,520,421);


(lib.topic_2_bg3 = function() {
	this.initialize(img.topic_2_bg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,520,421);


(lib.topic_2_bg4 = function() {
	this.initialize(img.topic_2_bg4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,520,421);


(lib.topic_3_bg1 = function() {
	this.initialize(img.topic_3_bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,601,388);


(lib.topic_3_bg2 = function() {
	this.initialize(img.topic_3_bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,601,388);


(lib.topic_4_bg1 = function() {
	this.initialize(img.topic_4_bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,560,447);


(lib.topic_4_bg2 = function() {
	this.initialize(img.topic_4_bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,560,447);


(lib.zhz = function() {
	this.initialize(img.zhz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,144);


(lib.topzhou_right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.dl_top();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144,34);


(lib.top_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_toppng复制();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,178);


(lib.startBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.012)").s().p("A+mYNMAAAgwZMA9NAAAMAAAAwZg");
	this.shape.setTransform(195.9,154.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,391.9,309.9);


(lib.result04_man04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cp_3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,244,450);


(lib.result04_man02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cp_2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,244,450);


(lib.result01_man01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.r_man_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,362,417);


(lib.result_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.result_again = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.result_b_2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,264,80);


(lib.r04_man_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.zhz();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145,144);


(lib.r04_duiliang_l = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(17).call(this.frame_17).wait(1));

	// duilianshadow (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_4 = new cjs.Graphics().p("ArYHVIAAupIWxAAIAAOpg");
	var mask_graphics_5 = new cjs.Graphics().p("ArYIyIAAuqIWxAAIAAOqg");
	var mask_graphics_6 = new cjs.Graphics().p("ArYLPIAA2dIWxAAIAAWdg");
	var mask_graphics_7 = new cjs.Graphics().p("ArYNtIAA2eIWxAAIAAWeg");
	var mask_graphics_8 = new cjs.Graphics().p("ArYQtMAAAghZIWxAAMAAAAhZg");
	var mask_graphics_9 = new cjs.Graphics().p("ArYTSMAAAghZIWxAAMAAAAhZg");
	var mask_graphics_10 = new cjs.Graphics().p("ArYWpMAAAgtRIWxAAMAAAAtRg");
	var mask_graphics_11 = new cjs.Graphics().p("ArYY/MAAAgtRIWxAAMAAAAtRg");
	var mask_graphics_12 = new cjs.Graphics().p("ArYbpMAAAg3RIWxAAMAAAA3Rg");
	var mask_graphics_13 = new cjs.Graphics().p("ArYd/MAAAg3RIWxAAMAAAA3Rg");
	var mask_graphics_14 = new cjs.Graphics().p("EgLYAgpMAAAhBRIWxAAMAAABBRg");
	var mask_graphics_15 = new cjs.Graphics().p("EgLYAkMMAAAhBQIWxAAMAAABBQg");
	var mask_graphics_16 = new cjs.Graphics().p("EgLYAqfMAAAhU8IWxAAMAAABU8g");
	var mask_graphics_17 = new cjs.Graphics().p("EgLYAqfMAAAhU8IWxAAMAAABU8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_graphics_4,x:65,y:45}).wait(1).to({graphics:mask_graphics_5,x:65,y:56.2}).wait(1).to({graphics:mask_graphics_6,x:65,y:86}).wait(1).to({graphics:mask_graphics_7,x:65,y:87.7}).wait(1).to({graphics:mask_graphics_8,x:65,y:121}).wait(1).to({graphics:mask_graphics_9,x:65,y:123.5}).wait(1).to({graphics:mask_graphics_10,x:65,y:159}).wait(1).to({graphics:mask_graphics_11,x:65,y:160}).wait(1).to({graphics:mask_graphics_12,x:65,y:191}).wait(1).to({graphics:mask_graphics_13,x:65,y:191.9}).wait(1).to({graphics:mask_graphics_14,x:65,y:222.9}).wait(1).to({graphics:mask_graphics_15,x:65,y:231.7}).wait(1).to({graphics:mask_graphics_16,x:65,y:285.9}).wait(1).to({graphics:mask_graphics_17,x:65,y:285.9}).wait(1));

	// 图层 1
	this.instance = new lib.dl_bottom();
	this.instance.setTransform(-9.5,520.5);

	this.instance_1 = new lib.r4_l();

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},4).to({state:[{t:this.instance_1},{t:this.instance}]},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.r04_duilian_r = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(17).call(this.frame_17).wait(1));

	// duilianshadow (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_4 = new cjs.Graphics().p("ArYHVIAAupIWxAAIAAOpg");
	var mask_graphics_5 = new cjs.Graphics().p("ArYIyIAAuqIWxAAIAAOqg");
	var mask_graphics_6 = new cjs.Graphics().p("ArYLPIAA2dIWxAAIAAWdg");
	var mask_graphics_7 = new cjs.Graphics().p("ArYNtIAA2eIWxAAIAAWeg");
	var mask_graphics_8 = new cjs.Graphics().p("ArYQtMAAAghZIWxAAMAAAAhZg");
	var mask_graphics_9 = new cjs.Graphics().p("ArYTSMAAAghZIWxAAMAAAAhZg");
	var mask_graphics_10 = new cjs.Graphics().p("ArYWpMAAAgtRIWxAAMAAAAtRg");
	var mask_graphics_11 = new cjs.Graphics().p("ArYY/MAAAgtRIWxAAMAAAAtRg");
	var mask_graphics_12 = new cjs.Graphics().p("ArYbpMAAAg3RIWxAAMAAAA3Rg");
	var mask_graphics_13 = new cjs.Graphics().p("ArYd/MAAAg3RIWxAAMAAAA3Rg");
	var mask_graphics_14 = new cjs.Graphics().p("EgLYAgpMAAAhBRIWxAAMAAABBRg");
	var mask_graphics_15 = new cjs.Graphics().p("EgLYAkMMAAAhBQIWxAAMAAABBQg");
	var mask_graphics_16 = new cjs.Graphics().p("EgLYAqfMAAAhU8IWxAAMAAABU8g");
	var mask_graphics_17 = new cjs.Graphics().p("EgLYAqfMAAAhU8IWxAAMAAABU8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_graphics_4,x:65,y:45}).wait(1).to({graphics:mask_graphics_5,x:65,y:56.2}).wait(1).to({graphics:mask_graphics_6,x:65,y:86}).wait(1).to({graphics:mask_graphics_7,x:65,y:87.7}).wait(1).to({graphics:mask_graphics_8,x:65,y:121}).wait(1).to({graphics:mask_graphics_9,x:65,y:123.5}).wait(1).to({graphics:mask_graphics_10,x:65,y:159}).wait(1).to({graphics:mask_graphics_11,x:65,y:160}).wait(1).to({graphics:mask_graphics_12,x:65,y:191}).wait(1).to({graphics:mask_graphics_13,x:65,y:191.9}).wait(1).to({graphics:mask_graphics_14,x:65,y:222.9}).wait(1).to({graphics:mask_graphics_15,x:65,y:231.7}).wait(1).to({graphics:mask_graphics_16,x:65,y:285.9}).wait(1).to({graphics:mask_graphics_17,x:65,y:285.9}).wait(1));

	// 图层 1
	this.instance = new lib.dl_bottom();
	this.instance.setTransform(-4,519);

	this.instance_1 = new lib.r4_r();

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},4).to({state:[{t:this.instance_1},{t:this.instance}]},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.r03_duilian_r = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(17).call(this.frame_17).wait(1));

	// duilianshadow (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_4 = new cjs.Graphics().p("ArYHVIAAupIWxAAIAAOpg");
	var mask_graphics_5 = new cjs.Graphics().p("ArYIyIAAuqIWxAAIAAOqg");
	var mask_graphics_6 = new cjs.Graphics().p("ArYLPIAA2dIWxAAIAAWdg");
	var mask_graphics_7 = new cjs.Graphics().p("ArYNtIAA2eIWxAAIAAWeg");
	var mask_graphics_8 = new cjs.Graphics().p("ArYQtMAAAghZIWxAAMAAAAhZg");
	var mask_graphics_9 = new cjs.Graphics().p("ArYTSMAAAghZIWxAAMAAAAhZg");
	var mask_graphics_10 = new cjs.Graphics().p("ArYWpMAAAgtRIWxAAMAAAAtRg");
	var mask_graphics_11 = new cjs.Graphics().p("ArYY/MAAAgtRIWxAAMAAAAtRg");
	var mask_graphics_12 = new cjs.Graphics().p("ArYbpMAAAg3RIWxAAMAAAA3Rg");
	var mask_graphics_13 = new cjs.Graphics().p("ArYd/MAAAg3RIWxAAMAAAA3Rg");
	var mask_graphics_14 = new cjs.Graphics().p("EgLYAgpMAAAhBRIWxAAMAAABBRg");
	var mask_graphics_15 = new cjs.Graphics().p("EgLYAkMMAAAhBQIWxAAMAAABBQg");
	var mask_graphics_16 = new cjs.Graphics().p("EgLYAqfMAAAhU8IWxAAMAAABU8g");
	var mask_graphics_17 = new cjs.Graphics().p("EgLYAqfMAAAhU8IWxAAMAAABU8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_graphics_4,x:65,y:45}).wait(1).to({graphics:mask_graphics_5,x:65,y:56.2}).wait(1).to({graphics:mask_graphics_6,x:65,y:86}).wait(1).to({graphics:mask_graphics_7,x:65,y:87.7}).wait(1).to({graphics:mask_graphics_8,x:65,y:121}).wait(1).to({graphics:mask_graphics_9,x:65,y:123.5}).wait(1).to({graphics:mask_graphics_10,x:65,y:159}).wait(1).to({graphics:mask_graphics_11,x:65,y:160}).wait(1).to({graphics:mask_graphics_12,x:65,y:191}).wait(1).to({graphics:mask_graphics_13,x:65,y:191.9}).wait(1).to({graphics:mask_graphics_14,x:65,y:222.9}).wait(1).to({graphics:mask_graphics_15,x:65,y:231.7}).wait(1).to({graphics:mask_graphics_16,x:65,y:285.9}).wait(1).to({graphics:mask_graphics_17,x:65,y:285.9}).wait(1));

	// 图层 1
	this.instance = new lib.dl_bottom();
	this.instance.setTransform(-2,521);

	this.instance_1 = new lib.r3_r();

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},4).to({state:[{t:this.instance_1},{t:this.instance}]},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.r03_duilian_l = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(17).call(this.frame_17).wait(1));

	// duilianshadow (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_4 = new cjs.Graphics().p("ArYHVIAAupIWxAAIAAOpg");
	var mask_graphics_5 = new cjs.Graphics().p("ArYIyIAAuqIWxAAIAAOqg");
	var mask_graphics_6 = new cjs.Graphics().p("ArYLPIAA2dIWxAAIAAWdg");
	var mask_graphics_7 = new cjs.Graphics().p("ArYNtIAA2eIWxAAIAAWeg");
	var mask_graphics_8 = new cjs.Graphics().p("ArYQtMAAAghZIWxAAMAAAAhZg");
	var mask_graphics_9 = new cjs.Graphics().p("ArYTSMAAAghZIWxAAMAAAAhZg");
	var mask_graphics_10 = new cjs.Graphics().p("ArYWpMAAAgtRIWxAAMAAAAtRg");
	var mask_graphics_11 = new cjs.Graphics().p("ArYY/MAAAgtRIWxAAMAAAAtRg");
	var mask_graphics_12 = new cjs.Graphics().p("ArYbpMAAAg3RIWxAAMAAAA3Rg");
	var mask_graphics_13 = new cjs.Graphics().p("ArYd/MAAAg3RIWxAAMAAAA3Rg");
	var mask_graphics_14 = new cjs.Graphics().p("EgLYAgpMAAAhBRIWxAAMAAABBRg");
	var mask_graphics_15 = new cjs.Graphics().p("EgLYAkMMAAAhBQIWxAAMAAABBQg");
	var mask_graphics_16 = new cjs.Graphics().p("EgLYAqfMAAAhU8IWxAAMAAABU8g");
	var mask_graphics_17 = new cjs.Graphics().p("EgLYAqfMAAAhU8IWxAAMAAABU8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_graphics_4,x:65,y:45}).wait(1).to({graphics:mask_graphics_5,x:65,y:56.2}).wait(1).to({graphics:mask_graphics_6,x:65,y:86}).wait(1).to({graphics:mask_graphics_7,x:65,y:87.7}).wait(1).to({graphics:mask_graphics_8,x:65,y:121}).wait(1).to({graphics:mask_graphics_9,x:65,y:123.5}).wait(1).to({graphics:mask_graphics_10,x:65,y:159}).wait(1).to({graphics:mask_graphics_11,x:65,y:160}).wait(1).to({graphics:mask_graphics_12,x:65,y:191}).wait(1).to({graphics:mask_graphics_13,x:65,y:191.9}).wait(1).to({graphics:mask_graphics_14,x:65,y:222.9}).wait(1).to({graphics:mask_graphics_15,x:65,y:231.7}).wait(1).to({graphics:mask_graphics_16,x:65,y:285.9}).wait(1).to({graphics:mask_graphics_17,x:65,y:285.9}).wait(1));

	// 图层 1
	this.instance = new lib.dl_bottom();
	this.instance.setTransform(-9.5,520.5);

	this.instance_1 = new lib.r3_l();

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},4).to({state:[{t:this.instance_1},{t:this.instance}]},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.r02_r = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(17).call(this.frame_17).wait(1));

	// duilianshadow (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_4 = new cjs.Graphics().p("ArYHVIAAupIWxAAIAAOpg");
	var mask_graphics_5 = new cjs.Graphics().p("ArYIyIAAuqIWxAAIAAOqg");
	var mask_graphics_6 = new cjs.Graphics().p("ArYLPIAA2dIWxAAIAAWdg");
	var mask_graphics_7 = new cjs.Graphics().p("ArYNtIAA2eIWxAAIAAWeg");
	var mask_graphics_8 = new cjs.Graphics().p("ArYQtMAAAghZIWxAAMAAAAhZg");
	var mask_graphics_9 = new cjs.Graphics().p("ArYTSMAAAghZIWxAAMAAAAhZg");
	var mask_graphics_10 = new cjs.Graphics().p("ArYWpMAAAgtRIWxAAMAAAAtRg");
	var mask_graphics_11 = new cjs.Graphics().p("ArYY/MAAAgtRIWxAAMAAAAtRg");
	var mask_graphics_12 = new cjs.Graphics().p("ArYbpMAAAg3RIWxAAMAAAA3Rg");
	var mask_graphics_13 = new cjs.Graphics().p("ArYd/MAAAg3RIWxAAMAAAA3Rg");
	var mask_graphics_14 = new cjs.Graphics().p("EgLYAgpMAAAhBRIWxAAMAAABBRg");
	var mask_graphics_15 = new cjs.Graphics().p("EgLYAkMMAAAhBQIWxAAMAAABBQg");
	var mask_graphics_16 = new cjs.Graphics().p("EgLYAqfMAAAhU8IWxAAMAAABU8g");
	var mask_graphics_17 = new cjs.Graphics().p("EgLYAqfMAAAhU8IWxAAMAAABU8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_graphics_4,x:65,y:45}).wait(1).to({graphics:mask_graphics_5,x:65,y:56.2}).wait(1).to({graphics:mask_graphics_6,x:65,y:86}).wait(1).to({graphics:mask_graphics_7,x:65,y:87.7}).wait(1).to({graphics:mask_graphics_8,x:65,y:121}).wait(1).to({graphics:mask_graphics_9,x:65,y:123.5}).wait(1).to({graphics:mask_graphics_10,x:65,y:159}).wait(1).to({graphics:mask_graphics_11,x:65,y:160}).wait(1).to({graphics:mask_graphics_12,x:65,y:191}).wait(1).to({graphics:mask_graphics_13,x:65,y:191.9}).wait(1).to({graphics:mask_graphics_14,x:65,y:222.9}).wait(1).to({graphics:mask_graphics_15,x:65,y:231.7}).wait(1).to({graphics:mask_graphics_16,x:65,y:285.9}).wait(1).to({graphics:mask_graphics_17,x:65,y:285.9}).wait(1));

	// 图层 1
	this.instance = new lib.dl_bottom();
	this.instance.setTransform(-2,519);

	this.instance_1 = new lib.r2_r();

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},4).to({state:[{t:this.instance_1},{t:this.instance}]},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.r02_man = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// man
	this.instance = new lib.r_man_2_1();

	this.instance_1 = new lib.r_man_2_2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,299,517);


(lib.r02_l = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(17).call(this.frame_17).wait(1));

	// duilianshadow (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_4 = new cjs.Graphics().p("ArYHVIAAupIWxAAIAAOpg");
	var mask_graphics_5 = new cjs.Graphics().p("ArYIyIAAuqIWxAAIAAOqg");
	var mask_graphics_6 = new cjs.Graphics().p("ArYLPIAA2dIWxAAIAAWdg");
	var mask_graphics_7 = new cjs.Graphics().p("ArYNtIAA2eIWxAAIAAWeg");
	var mask_graphics_8 = new cjs.Graphics().p("ArYQtMAAAghZIWxAAMAAAAhZg");
	var mask_graphics_9 = new cjs.Graphics().p("ArYTSMAAAghZIWxAAMAAAAhZg");
	var mask_graphics_10 = new cjs.Graphics().p("ArYWpMAAAgtRIWxAAMAAAAtRg");
	var mask_graphics_11 = new cjs.Graphics().p("ArYY/MAAAgtRIWxAAMAAAAtRg");
	var mask_graphics_12 = new cjs.Graphics().p("ArYbpMAAAg3RIWxAAMAAAA3Rg");
	var mask_graphics_13 = new cjs.Graphics().p("ArYd/MAAAg3RIWxAAMAAAA3Rg");
	var mask_graphics_14 = new cjs.Graphics().p("EgLYAgpMAAAhBRIWxAAMAAABBRg");
	var mask_graphics_15 = new cjs.Graphics().p("EgLYAkMMAAAhBQIWxAAMAAABBQg");
	var mask_graphics_16 = new cjs.Graphics().p("EgLYAqfMAAAhU8IWxAAMAAABU8g");
	var mask_graphics_17 = new cjs.Graphics().p("EgLYAqfMAAAhU8IWxAAMAAABU8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_graphics_4,x:65,y:45}).wait(1).to({graphics:mask_graphics_5,x:65,y:56.2}).wait(1).to({graphics:mask_graphics_6,x:65,y:86}).wait(1).to({graphics:mask_graphics_7,x:65,y:87.7}).wait(1).to({graphics:mask_graphics_8,x:65,y:121}).wait(1).to({graphics:mask_graphics_9,x:65,y:123.5}).wait(1).to({graphics:mask_graphics_10,x:65,y:159}).wait(1).to({graphics:mask_graphics_11,x:65,y:160}).wait(1).to({graphics:mask_graphics_12,x:65,y:191}).wait(1).to({graphics:mask_graphics_13,x:65,y:191.9}).wait(1).to({graphics:mask_graphics_14,x:65,y:222.9}).wait(1).to({graphics:mask_graphics_15,x:65,y:231.7}).wait(1).to({graphics:mask_graphics_16,x:65,y:285.9}).wait(1).to({graphics:mask_graphics_17,x:65,y:285.9}).wait(1));

	// 图层 1
	this.instance = new lib.dl_bottom();
	this.instance.setTransform(-10,520);

	this.instance_1 = new lib.r2_l();

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},4).to({state:[{t:this.instance_1},{t:this.instance}]},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.qusetion04_btn_A = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EgmuAexMAAAg9hMBNdAAAMAAAA9hg");
	this.shape.setTransform(248,196.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,495.9,393.9);


(lib.qusetion03_man02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.topic_3_bg2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,601,388);


(lib.qusetion03_man01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.topic_3_bg1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,601,388);


(lib.qusetion03_btn_A = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgnIAG3IAAttMBORAAAIAANtg");
	this.shape.setTransform(250.5,44);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,501.1,88);


(lib.qusetion02_btn_A = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EgmPAHFIAAuJMBMfAAAIAAOJg");
	this.shape.setTransform(244.8,45.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,489.7,90.8);


(lib.question04_man01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.topic_4_bg1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,560,447);


(lib.question02_man = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// man
	this.instance = new lib.topic_2_bg1();

	this.instance_1 = new lib.topic_2_bg2();
	this.instance_1.setTransform(0.9,0);

	this.instance_2 = new lib.topic_2_bg3();
	this.instance_2.setTransform(0.9,0);

	this.instance_3 = new lib.topic_2_bg4();
	this.instance_3.setTransform(-1.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,520,421);


(lib.question01_man01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// man
	this.instance = new lib.topic_1_bg1();

	this.instance_1 = new lib.topic_1_bg2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,553,425);


(lib.question01_btn_D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(69,69,69,0.008)").s().p("EgmaAFdIAAq5MBM0AAAIAAK5g");
	this.shape.setTransform(245.9,35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,491.8,70);


(lib.question01_btn_C = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(69,69,69,0.008)").s().p("EgmuAFnIAArNMBNdAAAIAALNg");
	this.shape.setTransform(247.9,36);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,495.8,72);


(lib.question01_btn_B = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(68,68,68,0.008)").s().p("EgmkAFnIAArNMBNJAAAIAALNg");
	this.shape.setTransform(246.9,36);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,493.8,72);


(lib.question01_btn_A = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(2,255,255,0.012)").s().p("EgmlAHQIAAufMBNLAAAIAAOfg");
	this.shape.setTransform(247,46.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,494.1,93);


(lib.q4_current = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// d.png
	this.instance = new lib.d();
	this.instance.setTransform(23.6,337.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1));

	// c.png
	this.instance_1 = new lib.c();
	this.instance_1.setTransform(23.6,235.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// b.png
	this.instance_2 = new lib.b();
	this.instance_2.setTransform(23.6,129.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// a.png
	this.instance_3 = new lib.a();
	this.instance_3.setTransform(23.6,19.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.q3_current = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// d.png
	this.instance = new lib.d();
	this.instance.setTransform(0,320.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1));

	// c.png
	this.instance_1 = new lib.c();
	this.instance_1.setTransform(0,214.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// b.png
	this.instance_2 = new lib.b();
	this.instance_2.setTransform(0.1,110.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// a.png
	this.instance_3 = new lib.a();
	this.instance_3.setTransform(0.1,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.q2_current = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// d.png
	this.instance = new lib.d();
	this.instance.setTransform(-28,316.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1));

	// c.png
	this.instance_1 = new lib.c();
	this.instance_1.setTransform(-28,215);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// b.png
	this.instance_2 = new lib.b();
	this.instance_2.setTransform(-28,107);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// a.png
	this.instance_3 = new lib.a();
	this.instance_3.setTransform(-28,-1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.q1_current = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// d.png
	this.instance = new lib.d();
	this.instance.setTransform(4,318.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1));

	// c.png
	this.instance_1 = new lib.c();
	this.instance_1.setTransform(4,212.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// b.png
	this.instance_2 = new lib.b();
	this.instance_2.setTransform(4,102.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// a.png
	this.instance_3 = new lib.a();
	this.instance_3.setTransform(4,-4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.补间36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q4_d();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q4_d();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q4_c();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q4_c();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q4_b();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q4_b();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q4_a();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q4_a();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q3_d();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q3_d();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q3_c();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q3_c();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q3_b();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q3_b();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q3_a();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q3_a();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q2_d();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q2_d();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q2_c();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q2_c();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q2_b();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q2_b();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q2_a();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q2_a();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q1_d();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q1_d();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q1_c();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q1_c();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q1_b();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q1_b();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q1_a();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q1_a();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_title();
	this.instance.setTransform(-262.5,-206.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-262.5,-206.5,525,413);


(lib.补间3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_title();
	this.instance.setTransform(-262.5,-206.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-262.5,-206.5,525,413);


(lib.补间2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_top();
	this.instance.setTransform(-320,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-89,640,178);


(lib.补间1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_top();
	this.instance.setTransform(-320,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-89,640,178);


(lib.duilian01_right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(17).call(this.frame_17).wait(1));

	// duilianshadow (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_4 = new cjs.Graphics().p("ArYHVIAAupIWxAAIAAOpg");
	var mask_graphics_5 = new cjs.Graphics().p("ArYIyIAAuqIWxAAIAAOqg");
	var mask_graphics_6 = new cjs.Graphics().p("ArYLPIAA2dIWxAAIAAWdg");
	var mask_graphics_7 = new cjs.Graphics().p("ArYNtIAA2eIWxAAIAAWeg");
	var mask_graphics_8 = new cjs.Graphics().p("ArYQtMAAAghZIWxAAMAAAAhZg");
	var mask_graphics_9 = new cjs.Graphics().p("ArYTSMAAAghZIWxAAMAAAAhZg");
	var mask_graphics_10 = new cjs.Graphics().p("ArYWpMAAAgtRIWxAAMAAAAtRg");
	var mask_graphics_11 = new cjs.Graphics().p("ArYY/MAAAgtRIWxAAMAAAAtRg");
	var mask_graphics_12 = new cjs.Graphics().p("ArYbpMAAAg3RIWxAAMAAAA3Rg");
	var mask_graphics_13 = new cjs.Graphics().p("ArYd/MAAAg3RIWxAAMAAAA3Rg");
	var mask_graphics_14 = new cjs.Graphics().p("EgLYAgpMAAAhBRIWxAAMAAABBRg");
	var mask_graphics_15 = new cjs.Graphics().p("EgLYAkMMAAAhBQIWxAAMAAABBQg");
	var mask_graphics_16 = new cjs.Graphics().p("EgLYAqfMAAAhU8IWxAAMAAABU8g");
	var mask_graphics_17 = new cjs.Graphics().p("EgLYAqfMAAAhU8IWxAAMAAABU8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_graphics_4,x:65,y:45}).wait(1).to({graphics:mask_graphics_5,x:65,y:56.2}).wait(1).to({graphics:mask_graphics_6,x:65,y:86}).wait(1).to({graphics:mask_graphics_7,x:65,y:87.7}).wait(1).to({graphics:mask_graphics_8,x:65,y:121}).wait(1).to({graphics:mask_graphics_9,x:65,y:123.5}).wait(1).to({graphics:mask_graphics_10,x:65,y:159}).wait(1).to({graphics:mask_graphics_11,x:65,y:160}).wait(1).to({graphics:mask_graphics_12,x:65,y:191}).wait(1).to({graphics:mask_graphics_13,x:65,y:191.9}).wait(1).to({graphics:mask_graphics_14,x:65,y:222.9}).wait(1).to({graphics:mask_graphics_15,x:65,y:231.7}).wait(1).to({graphics:mask_graphics_16,x:65,y:285.9}).wait(1).to({graphics:mask_graphics_17,x:65,y:285.9}).wait(1));

	// duilianright
	this.instance = new lib.dl_bottom();
	this.instance.setTransform(0,522);

	this.instance_1 = new lib.r1_r();

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},4).to({state:[{t:this.instance_1},{t:this.instance}]},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.denglong01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// denglong
	this.instance = new lib.denglong();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({rotation:14,x:20.3,y:-13.1},0).wait(5).to({rotation:0,x:0,y:0},0).wait(5).to({skewX:-14,skewY:166,x:101.9,y:-13.1},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130,480);


(lib.cover_man_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// man
	this.instance = new lib.cover_man_1();

	this.instance_1 = new lib.cover_man_2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,677);


(lib.cover_bg_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.cover_bg_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.count_word = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_60 = function() {
		this.parent.parent.gotoAndPlay(6)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(60).call(this.frame_60).wait(6));

	// wordshadow (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A0/DCIAAmEMAp/AAAIAAGEg");
	var mask_graphics_7 = new cjs.Graphics().p("A0/GFIAAsJMAp/AAAIAAMJg");
	var mask_graphics_15 = new cjs.Graphics().p("A0/JhIAAzBMAp/AAAIAATBg");
	var mask_graphics_24 = new cjs.Graphics().p("A0/MuIAA5bMAp/AAAIAAZbg");
	var mask_graphics_33 = new cjs.Graphics().p("A0/QKMAAAggTMAp/AAAMAAAAgTg");
	var mask_graphics_42 = new cjs.Graphics().p("A0/TwMAAAgnfMAp/AAAMAAAAnfg");
	var mask_graphics_51 = new cjs.Graphics().p("A0/XgMAAAgu/MAp/AAAMAAAAu/g");
	var mask_graphics_60 = new cjs.Graphics().p("A0/bLMAAAg2VMAp/AAAMAAAA2Vg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:128.5,y:11.5}).wait(7).to({graphics:mask_graphics_7,x:128.5,y:31}).wait(8).to({graphics:mask_graphics_15,x:128.5,y:53}).wait(9).to({graphics:mask_graphics_24,x:128.5,y:73.5}).wait(9).to({graphics:mask_graphics_33,x:128.5,y:95.5}).wait(9).to({graphics:mask_graphics_42,x:128.5,y:118.5}).wait(9).to({graphics:mask_graphics_51,x:128.5,y:142.5}).wait(9).to({graphics:mask_graphics_60,x:128.5,y:165.9}).wait(6));

	// word
	this.instance = new lib.count_txt();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,259,31);


(lib.count_man03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.count_man_3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,190,290);


(lib.count_man02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.count_man_2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,190,290);


(lib.count_man01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.count_man();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,190,290);


(lib.count_bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.count_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.btn_again = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0nGQIAAsfMApOAAAIAAMfg");
	this.shape.setTransform(132,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,264,80);


(lib.bottom_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(17).call(this.frame_17).wait(1));

	// duilianshadow (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_4 = new cjs.Graphics().p("ArYHVIAAupIWxAAIAAOpg");
	var mask_graphics_5 = new cjs.Graphics().p("ArYIyIAAuqIWxAAIAAOqg");
	var mask_graphics_6 = new cjs.Graphics().p("ArYLPIAA2dIWxAAIAAWdg");
	var mask_graphics_7 = new cjs.Graphics().p("ArYNtIAA2eIWxAAIAAWeg");
	var mask_graphics_8 = new cjs.Graphics().p("ArYQtMAAAghZIWxAAMAAAAhZg");
	var mask_graphics_9 = new cjs.Graphics().p("ArYTSMAAAghZIWxAAMAAAAhZg");
	var mask_graphics_10 = new cjs.Graphics().p("ArYWpMAAAgtRIWxAAMAAAAtRg");
	var mask_graphics_11 = new cjs.Graphics().p("ArYY/MAAAgtRIWxAAMAAAAtRg");
	var mask_graphics_12 = new cjs.Graphics().p("ArYbpMAAAg3RIWxAAMAAAA3Rg");
	var mask_graphics_13 = new cjs.Graphics().p("ArYd/MAAAg3RIWxAAMAAAA3Rg");
	var mask_graphics_14 = new cjs.Graphics().p("EgLYAgpMAAAhBRIWxAAMAAABBRg");
	var mask_graphics_15 = new cjs.Graphics().p("EgLYAkMMAAAhBQIWxAAMAAABBQg");
	var mask_graphics_16 = new cjs.Graphics().p("EgLYAqfMAAAhU8IWxAAMAAABU8g");
	var mask_graphics_17 = new cjs.Graphics().p("EgLYAqfMAAAhU8IWxAAMAAABU8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_graphics_4,x:65,y:45}).wait(1).to({graphics:mask_graphics_5,x:65,y:56.2}).wait(1).to({graphics:mask_graphics_6,x:65,y:86}).wait(1).to({graphics:mask_graphics_7,x:65,y:87.7}).wait(1).to({graphics:mask_graphics_8,x:65,y:121}).wait(1).to({graphics:mask_graphics_9,x:65,y:123.5}).wait(1).to({graphics:mask_graphics_10,x:65,y:159}).wait(1).to({graphics:mask_graphics_11,x:65,y:160}).wait(1).to({graphics:mask_graphics_12,x:65,y:191}).wait(1).to({graphics:mask_graphics_13,x:65,y:191.9}).wait(1).to({graphics:mask_graphics_14,x:65,y:222.9}).wait(1).to({graphics:mask_graphics_15,x:65,y:231.7}).wait(1).to({graphics:mask_graphics_16,x:65,y:285.9}).wait(1).to({graphics:mask_graphics_17,x:65,y:285.9}).wait(1));

	// 图层 1
	this.instance = new lib.dl_bottom();
	this.instance.setTransform(0,506);

	this.instance_1 = new lib.r1_l();
	this.instance_1.setTransform(8,0);

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},4).to({state:[{t:this.instance_1},{t:this.instance}]},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.topzhou_left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.topzhou_right = new lib.topzhou_right();
	this.topzhou_right.setTransform(72,17,1,1,0,0,0,72,17);

	this.timeline.addTween(cjs.Tween.get(this.topzhou_right).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144,34);


(lib.result04_man01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cp_1();

	this.result04_man02 = new lib.result04_man02();
	this.result04_man02.setTransform(120,223.9,1,1,0,0,0,122,225);

	this.result04_man03 = new lib.result04_man04();
	this.result04_man03.setTransform(120,223.9,1,1,0,0,0,122,225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.result04_man02}]},4).to({state:[{t:this.result04_man03}]},5).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,244,450);


(lib.result01_man = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// man
	this.result01_man01 = new lib.result01_man01();
	this.result01_man01.setTransform(110.1,254.1,1,1,0,0,0,181,208.5);

	this.timeline.addTween(cjs.Tween.get(this.result01_man01).wait(1).to({rotation:15.7},0).wait(1).to({rotation:31.3,x:110,y:254.2},0).wait(1).to({rotation:47},0).wait(1).to({rotation:62.6,x:110.1,y:254.1},0).wait(1).to({rotation:78.3,x:110},0).wait(1).to({rotation:93.9,x:110.1},0).wait(1).to({rotation:109.6},0).wait(1).to({rotation:125.2,x:110},0).wait(1).to({rotation:140.9},0).wait(1).to({rotation:156.5,x:110.1},0).wait(1).to({rotation:172.2},0).wait(1).to({rotation:187.8},0).wait(1).to({rotation:203.5,x:110},0).wait(1).to({rotation:219.1,x:110.1},0).wait(1).to({rotation:234.8,x:110},0).wait(1).to({rotation:250.4,x:110.1},0).wait(1).to({rotation:266.1},0).wait(1).to({rotation:281.7},0).wait(1).to({rotation:297.4},0).wait(1).to({rotation:313},0).wait(1).to({rotation:328.7},0).wait(1).to({rotation:344.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.9,45.6,362,417);


(lib.result_topzhou_left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// topzhou
	this.topzhou_left = new lib.topzhou_left();
	this.topzhou_left.setTransform(72,17,1,1,0,0,0,72,17);

	this.timeline.addTween(cjs.Tween.get(this.topzhou_left).wait(1));

	// duilian01_left
	this.instance = new lib.bottom_shadow();
	this.instance.setTransform(72,285.9,1,1,0,0,0,72,270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144,34);


(lib.result_top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.top_04();
	this.instance.setTransform(320,89,1,1,0,0,0,320,89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,178);


(lib.result_duilian01An_right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// topzhou
	this.instance = new lib.dl_top();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// duilian01_right
	this.duilian01_right = new lib.duilian01_right();
	this.duilian01_right.setTransform(70.5,282.5,1,1,0,0,0,70.5,269.5);

	this.timeline.addTween(cjs.Tween.get(this.duilian01_right).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144,34);


(lib.r04_top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// top_l
	this.instance = new lib.dl_top();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// duilian_l
	this.r04_duiliang_l = new lib.r04_duiliang_l();
	this.r04_duiliang_l.setTransform(72,280.9,1,1,0,0,0,62,270);

	this.timeline.addTween(cjs.Tween.get(this.r04_duiliang_l).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144,34);


(lib.r04_r = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// top_r
	this.instance = new lib.dl_top();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// duilian_r
	this.r04_duilian_r = new lib.r04_duilian_r();
	this.r04_duilian_r.setTransform(69.5,286.9,1,1,0,0,0,69.5,269.5);

	this.timeline.addTween(cjs.Tween.get(this.r04_duilian_r).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144,34);


(lib.r03_r = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.dl_top();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// duilian
	this.r03_duilian_r = new lib.r03_duilian_r();
	this.r03_duilian_r.setTransform(69.5,282.4,1,1,0,0,0,69.5,269.5);

	this.timeline.addTween(cjs.Tween.get(this.r03_duilian_r).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144,34);


(lib.r03_man = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.r04_man_1();
	this.instance.setTransform(134.2,264.4,1,1,0,0,0,72.5,72);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},9).wait(1));

	// 图层 1
	this.instance_1 = new lib.r_man_3();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,331,501);


(lib.r03_l = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.dl_top();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// duilian
	this.r03_duilian_l = new lib.r03_duilian_l();
	this.r03_duilian_l.setTransform(71.1,280.4,1,1,0,0,0,62,270);

	this.timeline.addTween(cjs.Tween.get(this.r03_duilian_l).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144,34);


(lib.r02_top_r = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.dl_top();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.r02_r = new lib.r02_r();
	this.r02_r.setTransform(69.5,281.9,1,1,0,0,0,69.5,269.5);

	this.timeline.addTween(cjs.Tween.get(this.r02_r).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144,34);


(lib.r02_top_l = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// top
	this.instance = new lib.dl_bottom();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.r02_l = new lib.r02_l();
	this.r02_l.setTransform(71.9,286,1,1,0,0,0,62,270);

	this.timeline.addTween(cjs.Tween.get(this.r02_l).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144,34);


(lib.qusetion04_btn_D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.qusetion04_btn_A = new lib.qusetion04_btn_A();
	this.qusetion04_btn_A.setTransform(248,47,1,0.238,0,180,0,248,197);
	new cjs.ButtonHelper(this.qusetion04_btn_A, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.qusetion04_btn_A).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,495.9,93.9);


(lib.qusetion04_btn_C = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.qusetion04_btn_A = new lib.qusetion04_btn_A();
	this.qusetion04_btn_A.setTransform(248,47,1,0.238,0,180,0,248,197);
	new cjs.ButtonHelper(this.qusetion04_btn_A, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.qusetion04_btn_A).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,495.9,93.9);


(lib.qusetion03_man = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// man
	this.qusetion03_man01 = new lib.qusetion03_man01();
	this.qusetion03_man01.setTransform(300.5,194,1,1,0,0,0,300.5,194);

	this.qusetion03_man02 = new lib.qusetion03_man02();
	this.qusetion03_man02.setTransform(300.5,194,1,1,0,0,0,300.5,194);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.qusetion03_man01}]}).to({state:[{t:this.qusetion03_man02}]},5).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,601,388);


(lib.qusetion03_btn_D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.qusetion03_btn_A = new lib.qusetion03_btn_A();
	this.qusetion03_btn_A.setTransform(250.5,44,1,1,0,0,0,250.5,44);
	new cjs.ButtonHelper(this.qusetion03_btn_A, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.qusetion03_btn_A).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,501.1,88);


(lib.qusetion03_btn_C = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.qusetion03_btn_A = new lib.qusetion03_btn_A();
	this.qusetion03_btn_A.setTransform(250.5,44,1,1,0,0,0,250.5,44);
	new cjs.ButtonHelper(this.qusetion03_btn_A, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.qusetion03_btn_A).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,501.1,88);


(lib.qusetion03_btn_B = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.qusetion03_btn_A = new lib.qusetion03_btn_A();
	this.qusetion03_btn_A.setTransform(250.5,44,1,1,0,0,0,250.5,44);
	new cjs.ButtonHelper(this.qusetion03_btn_A, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.qusetion03_btn_A).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,501.1,88);


(lib.qusetion02_btn_D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.qusetion02_btn_A = new lib.qusetion02_btn_A();
	this.qusetion02_btn_A.setTransform(244.8,45.4,1,1,0,0,0,244.8,45.4);
	new cjs.ButtonHelper(this.qusetion02_btn_A, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.qusetion02_btn_A).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,489.7,90.8);


(lib.qusetion02_btn_C = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.qusetion02_btn_A = new lib.qusetion02_btn_A();
	this.qusetion02_btn_A.setTransform(244.8,45.4,1,1,0,0,0,244.8,45.4);
	new cjs.ButtonHelper(this.qusetion02_btn_A, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.qusetion02_btn_A).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,489.7,90.8);


(lib.qusetion02_btn_B = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.qusetion02_btn_A = new lib.qusetion02_btn_A();
	this.qusetion02_btn_A.setTransform(244.8,45.4,1,1,0,0,0,244.8,45.4);
	new cjs.ButtonHelper(this.qusetion02_btn_A, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.qusetion02_btn_A).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,489.7,90.8);


(lib.question04_man02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.question04_man01 = new lib.question04_man01();
	this.question04_man01.setTransform(280,223.5,1,1,0,0,0,280,223.5);

	this.timeline.addTween(cjs.Tween.get(this.question04_man01).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,560,447);


(lib.question04_man = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// man
	this.question04_man02 = new lib.question04_man02();
	this.question04_man02.setTransform(280,223.5,1,1,0,0,0,280,223.5);

	this.instance = new lib.topic_4_bg2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.question04_man02}]}).to({state:[{t:this.instance}]},5).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,560,447);


(lib.question03_wrap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		
		this.qusetion03_btn_D.addEventListener("click", fl_MouseClickHandler_13.bind(this));
		
		function fl_MouseClickHandler_13()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			iscoll += 4;
			this.q3_current.gotoAndStop(4);
			this.gotoAndPlay(31);
			// 结束您的自定义代码
		}
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		
		this.qusetion03_btn_C.addEventListener("click", fl_MouseClickHandler_12.bind(this));
		
		function fl_MouseClickHandler_12()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			iscoll += 3;
			this.q3_current.gotoAndStop(3);
			this.gotoAndPlay(31);
			// 结束您的自定义代码
		}
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		
		this.qusetion03_btn_B.addEventListener("click", fl_MouseClickHandler_11.bind(this));
		
		function fl_MouseClickHandler_11()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			iscoll += 2;
			this.q3_current.gotoAndStop(2);
			this.gotoAndPlay(31);
			// 结束您的自定义代码
		}
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		
		this.qusetion03_btn_A.addEventListener("click", fl_MouseClickHandler_10.bind(this));
		
		function fl_MouseClickHandler_10()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			iscoll += 1;
			this.q3_current.gotoAndStop(1);
			this.gotoAndPlay(31);
			// 结束您的自定义代码
		}
	}
	this.frame_35 = function() {
		this.q3_current.gotoAndStop(0);
	}
	this.frame_39 = function() {
		this.q3_current.gotoAndStop(0);
	}
	this.frame_44 = function() {
		this.q3_current.gotoAndStop(0);
	}
	this.frame_49 = function() {
		this.q3_current.gotoAndStop(0);
	}
	this.frame_59 = function() {
		this.parent.gotoAndPlay(4);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(6).call(this.frame_35).wait(4).call(this.frame_39).wait(5).call(this.frame_44).wait(5).call(this.frame_49).wait(10).call(this.frame_59).wait(1));

	// man
	this.qusetion03_man = new lib.qusetion03_man();
	this.qusetion03_man.setTransform(321.5,-200.1,1,1,0,0,0,300.5,194);
	this.qusetion03_man._off = true;

	this.timeline.addTween(cjs.Tween.get(this.qusetion03_man).wait(4).to({_off:false},0).to({y:423.9},15).wait(20).to({y:-200.1},20).wait(1));

	// top
	this.instance = new lib.top_04();
	this.instance.setTransform(320,-97,1,1,0,0,0,320,89);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:89},4).wait(30).to({y:-97},5).wait(21));

	// q3_current
	this.q3_current = new lib.q3_current();
	this.q3_current.setTransform(55.6,688.5,1,1,0,0,0,35.5,35.5);

	this.timeline.addTween(cjs.Tween.get(this.q3_current).wait(60));

	// btn_D
	this.qusetion03_btn_D = new lib.qusetion03_btn_D();
	this.qusetion03_btn_D.setTransform(342.5,1009.8,1,1,0,0,0,250.5,44);
	this.qusetion03_btn_D._off = true;
	new cjs.ButtonHelper(this.qusetion03_btn_D, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.qusetion03_btn_D).wait(29).to({_off:false},0).to({_off:true},6).wait(25));

	// btn_C
	this.qusetion03_btn_C = new lib.qusetion03_btn_C();
	this.qusetion03_btn_C.setTransform(340.5,905.8,1,1,0,0,0,250.5,44);
	this.qusetion03_btn_C._off = true;
	new cjs.ButtonHelper(this.qusetion03_btn_C, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.qusetion03_btn_C).wait(29).to({_off:false},0).to({_off:true},10).wait(21));

	// btn_B
	this.qusetion03_btn_B = new lib.qusetion03_btn_B();
	this.qusetion03_btn_B.setTransform(340.5,801.8,1,1,0,0,0,250.5,44);
	this.qusetion03_btn_B._off = true;
	new cjs.ButtonHelper(this.qusetion03_btn_B, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.qusetion03_btn_B).wait(29).to({_off:false},0).to({_off:true},15).wait(16));

	// btn_A
	this.qusetion03_btn_A = new lib.qusetion03_btn_A();
	this.qusetion03_btn_A.setTransform(340.5,687.8,1,1,0,0,0,250.5,44);
	this.qusetion03_btn_A._off = true;
	new cjs.ButtonHelper(this.qusetion03_btn_A, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.qusetion03_btn_A).wait(29).to({_off:false},0).to({_off:true},20).wait(11));

	// q3_a.png
	this.instance_1 = new lib.补间21("synched",0);
	this.instance_1.setTransform(304,1189.7);
	this.instance_1._off = true;

	this.instance_2 = new lib.补间22("synched",0);
	this.instance_2.setTransform(304,691.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({_off:true,y:691.7},10).wait(35).to({_off:false,y:1189.7},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},10).wait(35).to({startPosition:0},0).to({_off:true,y:1189.7},10).wait(1));

	// q3_b.png
	this.instance_3 = new lib.补间23("synched",0);
	this.instance_3.setTransform(304,1299.7);
	this.instance_3._off = true;

	this.instance_4 = new lib.补间24("synched",0);
	this.instance_4.setTransform(304,801.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({_off:true,y:801.7},10).wait(25).to({_off:false,y:1299.7},10).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},10).wait(25).to({startPosition:0},0).to({_off:true,y:1299.7},10).wait(6));

	// q3_c.png
	this.instance_5 = new lib.补间25("synched",0);
	this.instance_5.setTransform(304,1183.7);
	this.instance_5._off = true;

	this.instance_6 = new lib.补间26("synched",0);
	this.instance_6.setTransform(304,905.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},14).to({state:[{t:this.instance_6}]},10).to({state:[{t:this.instance_5}]},15).to({state:[{t:this.instance_5}]},10).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).to({_off:true,y:905.7},10).wait(15).to({_off:false,y:1183.7},0).to({startPosition:0},10).wait(11));

	// q3_d.png
	this.instance_7 = new lib.补间27("synched",0);
	this.instance_7.setTransform(304,1289.6);
	this.instance_7._off = true;

	this.instance_8 = new lib.补间28("synched",0);
	this.instance_8.setTransform(304,1011.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(19).to({_off:false},0).to({_off:true,y:1011.6},7).wait(9).to({_off:false,y:1289.6},9).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(19).to({_off:false},7).wait(9).to({startPosition:0},0).to({_off:true,y:1289.6},9).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-186,640,178);


(lib.question02_wrap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		
		this.qusetion02_btn_D.addEventListener("click", fl_MouseClickHandler_9.bind(this));
		
		function fl_MouseClickHandler_9()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			iscoll += 4;
			this.q2_current.gotoAndStop(4);
			this.gotoAndPlay(31);
			// 结束您的自定义代码
		}
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		
		this.qusetion02_btn_C.addEventListener("click", fl_MouseClickHandler_8.bind(this));
		
		function fl_MouseClickHandler_8()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			iscoll += 3;
			this.q2_current.gotoAndStop(3);
			this.gotoAndPlay(31);
			// 结束您的自定义代码
		}
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		
		this.qusetion02_btn_B.addEventListener("click", fl_MouseClickHandler_7.bind(this));
		
		function fl_MouseClickHandler_7()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			iscoll += 2;
			this.q2_current.gotoAndStop(2);
			this.gotoAndPlay(31);
			// 结束您的自定义代码
		}
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		
		this.qusetion02_btn_A.addEventListener("click", fl_MouseClickHandler_6.bind(this));
		
		function fl_MouseClickHandler_6()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			iscoll += 1;
			this.q2_current.gotoAndStop(1);
			this.gotoAndPlay(31);
			// 结束您的自定义代码
		}
	}
	this.frame_35 = function() {
		this.q2_current.gotoAndStop(0);
	}
	this.frame_40 = function() {
		this.q2_current.gotoAndStop(0);
	}
	this.frame_45 = function() {
		this.q2_current.gotoAndStop(0);
	}
	this.frame_50 = function() {
		this.q2_current.gotoAndStop(0);
	}
	this.frame_59 = function() {
		this.parent.gotoAndPlay(3)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(6).call(this.frame_35).wait(5).call(this.frame_40).wait(5).call(this.frame_45).wait(5).call(this.frame_50).wait(9).call(this.frame_59).wait(1));

	// top
	this.instance = new lib.top_04();
	this.instance.setTransform(320,-101,1,1,0,0,0,320,89);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:89},9).wait(26).to({y:-101},10).wait(15));

	// q2_current
	this.q2_current = new lib.q2_current();
	this.q2_current.setTransform(85.5,687.3,1,1,0,0,0,35.5,35.5);

	this.timeline.addTween(cjs.Tween.get(this.q2_current).wait(60));

	// btn_D
	this.qusetion02_btn_D = new lib.qusetion02_btn_D();
	this.qusetion02_btn_D.setTransform(373,1015.4,1,1,0,0,0,244.8,45.4);
	this.qusetion02_btn_D._off = true;
	new cjs.ButtonHelper(this.qusetion02_btn_D, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.qusetion02_btn_D).wait(29).to({_off:false},0).to({_off:true},6).wait(25));

	// btn_C
	this.qusetion02_btn_C = new lib.qusetion02_btn_C();
	this.qusetion02_btn_C.setTransform(373,908.4,1,1,0,0,0,244.8,45.4);
	this.qusetion02_btn_C._off = true;
	new cjs.ButtonHelper(this.qusetion02_btn_C, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.qusetion02_btn_C).wait(29).to({_off:false},0).wait(6).to({_off:true},5).wait(20));

	// btn_B
	this.qusetion02_btn_B = new lib.qusetion02_btn_B();
	this.qusetion02_btn_B.setTransform(373,798.4,1,1,0,0,0,244.8,45.4);
	this.qusetion02_btn_B._off = true;
	new cjs.ButtonHelper(this.qusetion02_btn_B, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.qusetion02_btn_B).wait(29).to({_off:false},0).wait(11).to({_off:true},5).wait(15));

	// btn_A
	this.qusetion02_btn_A = new lib.qusetion02_btn_A();
	this.qusetion02_btn_A.setTransform(373,686.4,1,1,0,0,0,244.8,45.4);
	this.qusetion02_btn_A._off = true;
	new cjs.ButtonHelper(this.qusetion02_btn_A, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.qusetion02_btn_A).wait(29).to({_off:false},0).wait(16).to({_off:true},5).wait(10));

	// manAn
	this.question02_man = new lib.question02_man();
	this.question02_man.setTransform(316,-267.5,1,1,0,0,0,260,210.5);
	this.question02_man._off = true;

	this.timeline.addTween(cjs.Tween.get(this.question02_man).wait(4).to({_off:false},0).to({y:406.5},22).wait(14).to({y:-267.5},19).wait(1));

	// q2_a.png
	this.instance_1 = new lib.补间13("synched",0);
	this.instance_1.setTransform(304.9,1189.7);
	this.instance_1._off = true;

	this.instance_2 = new lib.补间14("synched",0);
	this.instance_2.setTransform(304.9,691.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({_off:true,y:691.7},10).wait(36).to({_off:false,y:1203.7},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},10).wait(36).to({startPosition:0},0).to({_off:true,y:1203.7},9).wait(1));

	// q2_b.png
	this.instance_3 = new lib.补间15("synched",0);
	this.instance_3.setTransform(304.9,1191.7);
	this.instance_3._off = true;

	this.instance_4 = new lib.补间16("synched",0);
	this.instance_4.setTransform(304.9,799.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({_off:true,y:799.7},10).wait(26).to({_off:false,x:306.9,y:1203.7},10).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},10).wait(26).to({startPosition:0},0).to({_off:true,x:306.9,y:1203.7},10).wait(5));

	// q2_c.png
	this.instance_5 = new lib.补间17("synched",0);
	this.instance_5.setTransform(304.9,1201.6);
	this.instance_5._off = true;

	this.instance_6 = new lib.补间18("synched",0);
	this.instance_6.setTransform(304.9,907.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).to({_off:true,y:907.6},10).wait(16).to({_off:false,y:1201.6},10).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},10).wait(16).to({startPosition:0},0).to({_off:true,y:1201.6},10).wait(10));

	// q2_d.png
	this.instance_7 = new lib.补间19("synched",0);
	this.instance_7.setTransform(334.9,1199.6);
	this.instance_7._off = true;

	this.instance_8 = new lib.补间20("synched",0);
	this.instance_8.setTransform(304.9,1009.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(19).to({_off:false},0).to({_off:true,x:304.9,y:1009.6},7).wait(9).to({_off:false,x:306.9,y:1199.6},10).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(19).to({_off:false},7).wait(9).to({startPosition:0},0).to({_off:true,x:306.9,y:1199.6},10).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-190,640,178);


(lib.question01warp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		
		this.question01_btn_D.addEventListener("click", fl_MouseClickHandler_5.bind(this));
		
		function fl_MouseClickHandler_5()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			iscoll += 4;
			this.q1_current.gotoAndStop(4);
			this.gotoAndPlay(31);
			
			// 结束您的自定义代码
		}
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		
		this.question01_btn_C.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		
		function fl_MouseClickHandler_4()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			iscoll += 3;
			this.q1_current.gotoAndStop(3);
			this.gotoAndPlay(31);
			// 结束您的自定义代码
		}
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		
		this.question01_btn_B.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			iscoll += 2;
			this.q1_current.gotoAndStop(2);
			this.gotoAndPlay(31);
			// 结束您的自定义代码
		}
		this.question01_btn_A.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		function fl_MouseClickHandler_2()
		{
			iscoll += 1;
			this.q1_current.gotoAndStop(1);
			this.gotoAndPlay(31);
			
		}
	}
	this.frame_37 = function() {
		this.q1_current.gotoAndStop(0);
	}
	this.frame_40 = function() {
		this.q1_current.gotoAndStop(0);
	}
	this.frame_42 = function() {
		this.q1_current.gotoAndStop(0);
	}
	this.frame_44 = function() {
		this.q1_current.gotoAndStop(0);
	}
	this.frame_60 = function() {
		this.parent.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(8).call(this.frame_37).wait(3).call(this.frame_40).wait(2).call(this.frame_42).wait(2).call(this.frame_44).wait(16).call(this.frame_60).wait(1));

	// q1_current
	this.q1_current = new lib.q1_current();
	this.q1_current.setTransform(64,691.8,1,1,0,0,0,35.5,35.5);

	this.timeline.addTween(cjs.Tween.get(this.q1_current).wait(61));

	// top
	this.top = new lib.top_04();
	this.top.setTransform(320,-99,1,1,0,0,0,320,89);

	this.timeline.addTween(cjs.Tween.get(this.top).to({y:87},4).wait(33).to({y:-97},5).wait(19));

	// btn_D
	this.question01_btn_D = new lib.question01_btn_D();
	this.question01_btn_D.setTransform(347.9,1008.7,1,1,0,0,0,245.9,35);
	this.question01_btn_D._off = true;
	new cjs.ButtonHelper(this.question01_btn_D, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.question01_btn_D).wait(29).to({_off:false},0).to({_off:true},8).wait(24));

	// btn_C
	this.question01_btn_C = new lib.question01_btn_C();
	this.question01_btn_C.setTransform(349.9,901.7,1,1,0,0,0,247.9,36);
	this.question01_btn_C._off = true;
	new cjs.ButtonHelper(this.question01_btn_C, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.question01_btn_C).wait(29).to({_off:false},0).to({_off:true},11).wait(21));

	// btn_B
	this.question01_btn_B = new lib.question01_btn_B();
	this.question01_btn_B.setTransform(348.9,791.8,1,1,0,0,0,246.9,36);
	this.question01_btn_B._off = true;
	new cjs.ButtonHelper(this.question01_btn_B, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.question01_btn_B).wait(29).to({_off:false},0).to({_off:true},13).wait(19));

	// btn_A
	this.question01_btn_A = new lib.question01_btn_A();
	this.question01_btn_A.setTransform(351,682.3,1,1,0,0,0,247,46.5);
	this.question01_btn_A._off = true;
	new cjs.ButtonHelper(this.question01_btn_A, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.question01_btn_A).wait(29).to({_off:false},0).to({_off:true},15).wait(17));

	// q1_a.png
	this.instance = new lib.补间5("synched",0);
	this.instance.setTransform(315,1222.7);
	this.instance._off = true;

	this.instance_1 = new lib.补间6("synched",0);
	this.instance_1.setTransform(315,688.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({_off:true,y:688.7},10).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},10).wait(23).to({startPosition:0},0).wait(15).to({startPosition:0},0).to({y:1178.7},8).wait(1));

	// q1_b.png
	this.instance_2 = new lib.补间7("synched",0);
	this.instance_2.setTransform(315,1222.7);
	this.instance_2._off = true;

	this.instance_3 = new lib.补间8("synched",0);
	this.instance_3.setTransform(315,794.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({_off:true,y:794.7},10).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},10).wait(18).to({startPosition:0},0).wait(11).to({startPosition:0},0).to({y:1182.7},8).wait(4).to({startPosition:0},0).wait(1));

	// q1_c.png
	this.instance_4 = new lib.补间9("synched",0);
	this.instance_4.setTransform(315,1220.7);
	this.instance_4._off = true;

	this.instance_5 = new lib.补间10("synched",0);
	this.instance_5.setTransform(315,904.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({_off:true,y:904.7},10).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},10).wait(13).to({startPosition:0},0).wait(5).to({startPosition:0},0).to({y:1178.7},8).wait(10).to({startPosition:0},0).wait(1));

	// q1_d.png
	this.instance_6 = new lib.补间11("synched",0);
	this.instance_6.setTransform(315,1220.6);
	this.instance_6._off = true;

	this.instance_7 = new lib.补间12("synched",0);
	this.instance_7.setTransform(315,1010.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({_off:true,y:1010.6},8).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(19).to({_off:false},8).wait(10).to({startPosition:0},0).to({y:1180.6},9).wait(14).to({startPosition:0},0).wait(1));

	// manAn
	this.instance_8 = new lib.question01_man01();
	this.instance_8.setTransform(308.5,-425.5,1,1,0,0,0,276.5,212.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({_off:false},0).to({y:416.5},19).wait(14).to({y:-221.5},23).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-188,640,178);


(lib.coverbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// coverbackground
	this.instance = new lib.cover_bg_01();
	this.instance.setTransform(320,568,1,1,0,0,0,320,568);

	this.cover_bg_02 = new lib.cover_bg_02();
	this.cover_bg_02.setTransform(320,568.4,1,1,0,0,0,320,568);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.cover_bg_02}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.count_manAn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cover_man
	this.count_man02 = new lib.count_man01();
	this.count_man02.setTransform(95,145,1,1,0,0,0,95,145);

	this.count_man02_1 = new lib.count_man02();
	this.count_man02_1.setTransform(95,145,1,1,0,0,0,95,145);

	this.count_man03 = new lib.count_man03();
	this.count_man03.setTransform(95,145,1,1,0,0,0,95,145);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.count_man02}]}).to({state:[{t:this.count_man02_1}]},10).to({state:[{t:this.count_man03}]},11).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,190,290);


(lib.result03_wrap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// man
	this.r03_man = new lib.r03_man();
	this.r03_man.setTransform(337.5,519.8,1,1,0,0,0,165.5,250.5);

	this.timeline.addTween(cjs.Tween.get(this.r03_man).wait(1));

	// duilian_l
	this.r03_l = new lib.r03_l();
	this.r03_l.setTransform(110,216.3,1,1,0,0,0,72,17);

	this.timeline.addTween(cjs.Tween.get(this.r03_l).wait(1));

	// duilian_r
	this.r03_r = new lib.r03_r();
	this.r03_r.setTransform(528.8,216.3,1,1,0,0,0,72,17);

	this.timeline.addTween(cjs.Tween.get(this.r03_r).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(38,199.3,562.8,571);


(lib.result02_wrap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// man
	this.result04_man01 = new lib.result04_man01();
	this.result04_man01.setTransform(329.9,509.9,1,1,0,0,0,122,225);

	this.timeline.addTween(cjs.Tween.get(this.result04_man01).wait(1));

	// duilian_left
	this.r04_top = new lib.r04_top();
	this.r04_top.setTransform(116,219.9,1,1,0,0,0,72,17);

	this.timeline.addTween(cjs.Tween.get(this.r04_top).wait(1));

	// diulian_right
	this.r04_r = new lib.r04_r();
	this.r04_r.setTransform(530.9,219.9,1,1,0,0,0,72,17);

	this.timeline.addTween(cjs.Tween.get(this.r04_r).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(44,202.9,558.9,532);


(lib.result01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// result_manAn
	this.result01_man = new lib.result01_man();
	this.result01_man.setTransform(71.2,18.3,1,1,0,0,0,122,225);

	this.timeline.addTween(cjs.Tween.get(this.result01_man).wait(1));

	// result_duilian01An_right
	this.result_duilian01An_right = new lib.result_duilian01An_right();
	this.result_duilian01An_right.setTransform(271,-269.9,1,1,0,0,0,72,17);

	this.timeline.addTween(cjs.Tween.get(this.result_duilian01An_right).wait(1));

	// result_duilian01An_left
	this.result_topzhou_left = new lib.result_topzhou_left();
	this.result_topzhou_left.setTransform(-137,-269.9,1,1,0,0,0,72,17);

	this.timeline.addTween(cjs.Tween.get(this.result_topzhou_left).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-209,-286.9,552,542.8);


(lib.r03_wrap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// man
	this.r02_man = new lib.r02_man();
	this.r02_man.setTransform(324.9,543.8,1,1,0,0,0,149.5,258.5);

	this.timeline.addTween(cjs.Tween.get(this.r02_man).wait(1));

	// duilian_r
	this.r02_top_r = new lib.r02_top_r();
	this.r02_top_r.setTransform(529.8,221.9,1,1,0,0,0,72,17);

	this.timeline.addTween(cjs.Tween.get(this.r02_top_r).wait(1));

	// duilian_l
	this.r02_top_l = new lib.r02_top_l();
	this.r02_top_l.setTransform(118,221.9,1,1,0,0,0,72,17);

	this.timeline.addTween(cjs.Tween.get(this.r02_top_l).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46,204.9,555.8,597.4);


(lib.qusetion04_wrap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		
		this.qusetion04_btn_D.addEventListener("click", fl_MouseClickHandler_17.bind(this));
		
		function fl_MouseClickHandler_17()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			iscoll += 4;
			this.q4_current.gotoAndStop(4);
			this.gotoAndPlay(31);
			// 结束您的自定义代码
		}
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		
		this.qusetion04_btn_C.addEventListener("click", fl_MouseClickHandler_16.bind(this));
		
		function fl_MouseClickHandler_16()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			iscoll += 3;
			this.q4_current.gotoAndStop(3);
			this.gotoAndPlay(31);
			// 结束您的自定义代码
		}
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		
		this.qusetion04_btn_B.addEventListener("click", fl_MouseClickHandler_15.bind(this));
		
		function fl_MouseClickHandler_15()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			iscoll += 2;
			this.q4_current.gotoAndStop(2);
			this.gotoAndPlay(31);
			// 结束您的自定义代码
		}
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		
		this.qusetion04_btn_A.addEventListener("click", fl_MouseClickHandler_14.bind(this));
		
		function fl_MouseClickHandler_14()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			iscoll += 1;
			this.q4_current.gotoAndStop(1);
			this.gotoAndPlay(31);
			// 结束您的自定义代码
		}
	}
	this.frame_34 = function() {
		this.q4_current.gotoAndStop(0);
	}
	this.frame_39 = function() {
		this.q4_current.gotoAndStop(0);
	}
	this.frame_44 = function() {
		this.q4_current.gotoAndStop(0);
	}
	this.frame_49 = function() {
		this.q4_current.gotoAndStop(0);
	}
	this.frame_59 = function() {
		this.parent.gotoAndPlay(5);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(5).call(this.frame_34).wait(5).call(this.frame_39).wait(5).call(this.frame_44).wait(5).call(this.frame_49).wait(10).call(this.frame_59).wait(1));

	// top
	this.top_04 = new lib.top_04();
	this.top_04.setTransform(320,-109,1,1,0,0,0,320,89);

	this.timeline.addTween(cjs.Tween.get(this.top_04).to({y:89},4).wait(30).to({y:-101},5).wait(21));

	// q4_current
	this.q4_current = new lib.q4_current();
	this.q4_current.setTransform(34.1,673.1,1,1,0,0,0,35.5,35.5);

	this.timeline.addTween(cjs.Tween.get(this.q4_current).wait(60));

	// man
	this.question04_man = new lib.question04_man();
	this.question04_man.setTransform(334.9,-118.2,1,1,0,0,0,280,223.5);
	this.question04_man._off = true;

	this.timeline.addTween(cjs.Tween.get(this.question04_man).wait(4).to({_off:false},0).to({y:407.8},15).wait(20).to({y:-223.5},20).wait(1));

	// btn_D
	this.qusetion04_btn_D = new lib.qusetion04_btn_D();
	this.qusetion04_btn_D.setTransform(342,1014.7,1,1,0,0,0,248,47);
	this.qusetion04_btn_D._off = true;
	new cjs.ButtonHelper(this.qusetion04_btn_D, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.qusetion04_btn_D).wait(29).to({_off:false},0).to({_off:true},5).wait(26));

	// btn_C
	this.qusetion04_btn_C = new lib.qusetion04_btn_C();
	this.qusetion04_btn_C.setTransform(342,912.7,1,1,0,0,0,248,47);
	this.qusetion04_btn_C._off = true;
	new cjs.ButtonHelper(this.qusetion04_btn_C, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.qusetion04_btn_C).wait(29).to({_off:false},0).to({_off:true},10).wait(21));

	// btn_B
	this.qusetion04_btn_B = new lib.qusetion04_btn_A();
	this.qusetion04_btn_B.setTransform(342,800.7,1,0.238,0,180,0,248,197);
	this.qusetion04_btn_B._off = true;
	new cjs.ButtonHelper(this.qusetion04_btn_B, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.qusetion04_btn_B).wait(29).to({_off:false},0).to({_off:true},15).wait(16));

	// btn_A
	this.qusetion04_btn_A = new lib.qusetion04_btn_A();
	this.qusetion04_btn_A.setTransform(342,694.7,1,0.238,0,180,0,248,197);
	this.qusetion04_btn_A._off = true;
	new cjs.ButtonHelper(this.qusetion04_btn_A, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.qusetion04_btn_A).wait(29).to({_off:false},0).to({_off:true},20).wait(11));

	// q4_a.png
	this.instance = new lib.补间29("synched",0);
	this.instance.setTransform(306.9,1197.7);
	this.instance._off = true;

	this.instance_1 = new lib.补间30("synched",0);
	this.instance_1.setTransform(304.9,693.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({_off:true,x:304.9,y:693.7},10).wait(46));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},10).wait(35).to({startPosition:0},0).to({y:1191.8},10).wait(1));

	// q4_b.png
	this.instance_2 = new lib.补间31("synched",0);
	this.instance_2.setTransform(304.9,1189.7);
	this.instance_2._off = true;

	this.instance_3 = new lib.补间32("synched",0);
	this.instance_3.setTransform(304.9,803.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({_off:true,y:803.7},10).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},10).wait(25).to({startPosition:0},0).to({y:1191.8},10).wait(6));

	// q4_c.png
	this.instance_4 = new lib.补间33("synched",0);
	this.instance_4.setTransform(304.9,1191.7);
	this.instance_4._off = true;

	this.instance_5 = new lib.补间34("synched",0);
	this.instance_5.setTransform(304.9,909.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({_off:true,y:909.7},10).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},10).wait(15).to({startPosition:0},0).to({y:1195.8},10).wait(11));

	// q4_d.png
	this.instance_6 = new lib.补间35("synched",0);
	this.instance_6.setTransform(304.9,1187.6);
	this.instance_6._off = true;

	this.instance_7 = new lib.补间36("synched",0);
	this.instance_7.setTransform(304.9,1011.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({_off:true,y:1011.6},7).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(19).to({_off:false},7).wait(8).to({startPosition:0},0).to({y:1191.8},10).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-198,640,178);


(lib.coverwrap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.startBtn.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			
			this.gotoAndPlay(1);
			
		}
	}
	this.frame_23 = function() {
		this.parent.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(1));

	// btn
	this.startBtn = new lib.startBtn();
	this.startBtn.setTransform(311.9,866.7,1,1,0,0,0,195.9,154.9);
	new cjs.ButtonHelper(this.startBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.startBtn).wait(24));

	// topcurtain
	this.instance = new lib.补间1("synched",0);
	this.instance.setTransform(320,89);

	this.instance_1 = new lib.补间2("synched",0);
	this.instance_1.setTransform(320,-105);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},23).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:-105},23).wait(1));

	// title
	this.instance_2 = new lib.补间3("synched",0);
	this.instance_2.setTransform(334.5,384.5);

	this.instance_3 = new lib.补间4("synched",0);
	this.instance_3.setTransform(334.5,-421.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},23).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,y:-421.5},23).wait(1));

	// manAn
	this.instance_4 = new lib.cover_man_01();
	this.instance_4.setTransform(320,797.5,1,1,0,0,0,320,338.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:1495.5},23).wait(1));

	// denglongAn02
	this.denglong01 = new lib.denglong01();
	this.denglong01.setTransform(502.8,145,1,1,0,0,0,65,240);

	this.timeline.addTween(cjs.Tween.get(this.denglong01).to({x:944.8},23).wait(1));

	// denglongAn01
	this.denglong01_1 = new lib.denglong01();
	this.denglong01_1.setTransform(137,145,1,1,0,0,0,65,240);

	this.timeline.addTween(cjs.Tween.get(this.denglong01_1).to({x:-251},23).wait(1));

	// bgAn
	this.coverbg = new lib.coverbg();
	this.coverbg.setTransform(320,568,1,1,0,0,0,320,568);

	this.timeline.addTween(cjs.Tween.get(this.coverbg).to({_off:true},23).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-95,640,1231.1);


(lib.count_wrap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// count_word
	this.count_word = new lib.count_word();
	this.count_word.setTransform(326.9,679.8,1,1,0,0,0,129.5,165.5);

	this.timeline.addTween(cjs.Tween.get(this.count_word).wait(1));

	// count_manAn
	this.instance = new lib.count_manAn();
	this.instance.setTransform(328.9,301.9,1,1,0,0,0,95,145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// count_bgAn
	this.count_bg = new lib.count_bg_1();
	this.count_bg.setTransform(320,568,1,1,0,0,0,320,568);

	this.timeline.addTween(cjs.Tween.get(this.count_bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.result_wrap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.btn_again.addEventListener("click", fl_MouseClickHandler_18.bind(this));
		
		function fl_MouseClickHandler_18()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			this.parent.gotoAndPlay(1);
			// 结束您的自定义代码
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// btn_again
	this.btn_again = new lib.btn_again();
	this.btn_again.setTransform(318.9,861.7,1,1,0,0,0,132,40);
	new cjs.ButtonHelper(this.btn_again, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_again).wait(5));

	// result04
	this.result02_wrap = new lib.result02_wrap();
	this.result02_wrap.setTransform(320,89,1,1,0,0,0,320,89);
	this.result02_wrap._off = true;

	this.timeline.addTween(cjs.Tween.get(this.result02_wrap).wait(4).to({_off:false},0).wait(1));

	// result03
	this.result03_wrap = new lib.result03_wrap();
	this.result03_wrap.setTransform(320,89,1,1,0,0,0,320,89);
	this.result03_wrap._off = true;

	this.timeline.addTween(cjs.Tween.get(this.result03_wrap).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// result02
	this.r03_wrap = new lib.r03_wrap();
	this.r03_wrap.setTransform(320,89,1,1,0,0,0,320,89);
	this.r03_wrap._off = true;

	this.timeline.addTween(cjs.Tween.get(this.r03_wrap).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// result01
	this.instance = new lib.result01();
	this.instance.setTransform(285.9,527.8,1,1,0,0,0,35.5,35.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

	// result_again
	this.result_again = new lib.result_again();
	this.result_again.setTransform(318.9,861.7,1,1,0,0,0,132,40);

	this.timeline.addTween(cjs.Tween.get(this.result_again).wait(5));

	// result_top
	this.result_top = new lib.result_top();
	this.result_top.setTransform(320,89,1,1,0,0,0,320,89);

	this.timeline.addTween(cjs.Tween.get(this.result_top).wait(5));

	// result_bg
	this.result_bg = new lib.result_bg();
	this.result_bg.setTransform(320,568,1,1,0,0,0,320,568);

	this.timeline.addTween(cjs.Tween.get(this.result_bg).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1));

	// result
	this.result_wrap = new lib.result_wrap();
	this.result_wrap.setTransform(320,568,1,1,0,0,0,320,568);
	this.result_wrap._off = true;

	this.timeline.addTween(cjs.Tween.get(this.result_wrap).wait(6).to({_off:false},0).wait(1));

	// count
	this.count_wrap = new lib.count_wrap();
	this.count_wrap.setTransform(320,568,1,1,0,0,0,320,568);
	this.count_wrap._off = true;

	this.timeline.addTween(cjs.Tween.get(this.count_wrap).wait(5).to({_off:false},0).to({_off:true},1).wait(1));

	// question04
	this.qusetion04_wrap = new lib.qusetion04_wrap();
	this.qusetion04_wrap.setTransform(320,89,1,1,0,0,0,320,89);
	this.qusetion04_wrap._off = true;

	this.timeline.addTween(cjs.Tween.get(this.qusetion04_wrap).wait(4).to({_off:false},0).to({_off:true},1).wait(2));

	// question03
	this.instance = new lib.question03_wrap();
	this.instance.setTransform(320,89,1,1,0,0,0,320,89);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({_off:true},1).wait(3));

	// question02
	this.question02_wrap = new lib.question02_wrap();
	this.question02_wrap.setTransform(320,89,1,1,0,0,0,320,89);
	this.question02_wrap._off = true;

	this.timeline.addTween(cjs.Tween.get(this.question02_wrap).wait(2).to({_off:false},0).to({_off:true},1).wait(4));

	// question01
	this.question01warp = new lib.question01warp();
	this.question01warp.setTransform(320,-99,1,1,0,0,0,320,-99);
	this.question01warp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.question01warp).wait(1).to({_off:false},0).to({_off:true},1).wait(5));

	// cover
	this.coverwrap = new lib.coverwrap();
	this.coverwrap.setTransform(320,568,1,1,0,0,0,320,568);

	this.timeline.addTween(cjs.Tween.get(this.coverwrap).to({_off:true},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,473,640,1231.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;