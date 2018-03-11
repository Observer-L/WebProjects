// 容器
var countdown = document.querySelector('.countdown');

// 目标日期(ms)
var launchDate = new Date('Dec 7, 2018 00:00:00').getTime();

// 每秒更新
var intvl = setInterval(() => {
	// 获取当前日期的时间(ms)
	var now = new Date().getTime();

	// 两个日期的时间差(ms)
	var distance = launchDate - now;

	// 生成时间
	// Set the unit values in milliseconds.  
	// var msecPerMinute = 1000 * 60;  
	// var msecPerHour = msecPerMinute * 60;  
	// var msecPerDay = msecPerHour * 24;  
	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// 显示结果
	countdown.innerHTML = `
  <div>${days}<span>Days</span></div> 
  <div>${hours}<span>Hours</span></div>
  <div>${mins}<span>Minutes</span></div>
  <div>${seconds}<span>Seconds</span></div>
  `

	// 目标时间已过时更改显示结果
	if (distance < 0) {
		// 停止倒计时
		clearInterval(intvl);
		// 更改页面输出
		countdown.innerHTML = `<div id='launched'>Launched!</div>`
	}
}, 1000)