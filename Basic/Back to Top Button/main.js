window.onload = () => {
  (function backToTop() {
    let btn = document.getElementById('backToTop');
    let vh = document.documentElement.clientHeight; // 视口高度
    let timer = null; //定义一个定时器
    let isTop = true; //定义一个布尔值，用于判断是否到达顶部

    // 当滚动长度大于视口高度时，按钮出现
    window.onscroll = () => {
      let scrollHeight = document.documentElement.scrollTop;
      btn.style.display = scrollHeight > vh ? "block" : "none";

      //判断当点击回到顶部按钮后滚动条在回滚过程中，若手动滚动滚动条，则清除定时器
      if (!isTop) {
        clearInterval(timer);
      }
      isTop = false;
    }

    // 点击回滚
    btn.onclick = () => {
      timer = setInterval(() => {
        //获取滚动条的滚动高度
        let scrollTop = document.documentElement.scrollTop;
        //用于设置速度差，产生缓动的效果
        let speed = Math.floor(-scrollTop / 6);
        document.documentElement.scrollTop = document.body.scrollTop = scrollTop + speed;
        isTop = true; //用于阻止滚动事件清除定时器

        // 到达顶部清楚计时器停止滚动
        if (scrollTop == 0) {
          clearInterval(timer);
        }
      }, 50)
    }

  }());
}
