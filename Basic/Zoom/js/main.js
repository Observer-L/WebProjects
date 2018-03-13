window.onload = function() {

	var init_img = document.getElementById('init_img');
	var zoom = document.getElementById('zoom');
	var zoom_img = document.getElementById('zoom_img');
	var img = zoom_img.getElementsByTagName('img')[0];

	//鼠标在容器上时，显示放大镜和大图
	init_img.onmouseover = function(){
		zoom.style.display = 'block';
		zoom_img.style.display = 'block'
	};
	//鼠标在容器外时，隐藏放大镜和大图
	init_img.onmouseout = function(){
		zoom.style.display = 'none';
		zoom_img.style.display = 'none'
	};

	init_img.onmousemove = function(e){
		var scale = 3;

		//鼠标垂直居中于放大镜
		var x = e.clientX - zoom.offsetWidth/2 - init_img.offsetLeft;
		var y = e.clientY - zoom.offsetHeight/2 - init_img.offsetTop;
		if (x<0) {x=0;}
		if (x>=init_img.offsetWidth - zoom.offsetWidth) {
			x = init_img.offsetWidth - zoom.offsetWidth;
		}
		if (y<0) {y=0;}
		if (y>=init_img.offsetHeight - zoom.offsetHeight) {
			y = init_img.offsetHeight - zoom.offsetHeight;
		}
		//放大镜大小
		zoom.style.width = parseInt(init_img.offsetWidth/scale)+'px';
		zoom.style.height = parseInt(init_img.offsetHeight/scale)+'px';

		//大图宽高
		img.style.width = init_img.offsetWidth * scale +'px';
		img.style.height = init_img.offsetHeight * scale +'px';

		//放大镜随鼠标移动
		zoom.style.left = x +'px';
		zoom.style.top = y +'px';

		//同比放缩，反向移动
		var left = scale * zoom.offsetLeft;
		var top = scale * zoom.offsetTop;
		img.style.left = -left + 'px';
		img.style.top = -top +'px';
	}
};
