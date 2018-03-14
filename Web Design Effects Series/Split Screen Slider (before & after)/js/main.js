document.addEventListener('DOMContentLoaded', function() {
  let wrapper = document.getElementsByClassName('wrapper')[0];
  let after = wrapper.getElementsByTagName("div")[0];
  let handle = wrapper.getElementsByTagName("div")[1];
  let offset_space = 0;
  handle.style.left = '50%';
  after.style.width = '50%';

  function positionHandler(e) {
    if ((e.clientX) && (e.clientY)) {
      offset_space = (e.clientX - window.innerWidth / 2) * 0.25;
      left = e.clientX + offset_space;
      if (left < 0) {
        left = 0;
      } else if (left >= window.innerWidth) {
        left = window.innerWidth;
      }
      handle.style.left = left + 'px';
      after.style.width = left + 'px';

    } else if (e.targetTouches) {
      offset_space = (e.targetTouches[0].clientX - window.innerWidth / 2) * 0.25;
      left = e.targetTouches[0].clientX + offset_space;
      if (left < 0) {
        left = 0;
      } else if (left >= window.innerWidth) {
        left = window.innerWidth;
      }
      handle.style.left = left + 'px';
      after.style.width = left + 'px';
      e.preventDefault();
    }
  };

  wrapper.addEventListener('mousemove', positionHandler, false);
  wrapper.addEventListener('touchstart', positionHandler, false);
  wrapper.addEventListener('touchmove', positionHandler, false);
});
