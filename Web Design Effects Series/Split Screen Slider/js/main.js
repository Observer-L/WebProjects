document.addEventListener('DOMContentLoaded', function() {
	let wrapper = document.getElementById("wrapper");
	let topLayer = wrapper.querySelector('.top');
	let handle = wrapper.querySelector('.handle');
	let skew = 0;
	let delta = 0;

	if (wrapper.className.indexOf('skewed') != -1) {
		skew = 1000;
	}

	wrapper.addEventListener('mousemove', function(e) {
		delta = (e.clientX - window.innerWidth / 2) * 0.5;

		handle.style.left = e.clientX + delta + 'px';
		handle.style.transition = '';
		topLayer.style.width = e.clientX + skew + delta + 'px';
		topLayer.style.transition = '';
	})

	wrapper.addEventListener('mouseout', function() {

		handle.style.left = '50%';
		handle.style.transition = '.5s';
		topLayer.style.width = 'calc(50vw + 1000px)';
		topLayer.style.transition = '.5s';
	})
})