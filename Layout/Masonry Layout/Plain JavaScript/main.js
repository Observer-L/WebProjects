function waterFall(parent, box) {
  // 容器居中
  // 从第二行开始的图片总是拼接在上一行高度最矮的图片下面

  // 设置容器列数并居中
  // 拿到容器内的所有盒子
  let container = document.getElementById(parent);
  let boxes = container.getElementsByClassName(box);
  // 每个盒子的固定宽度 (offsetWidth = width + padding + border)
  let boxWidth = boxes[0].offsetWidth;
  // 浏览器的宽度
  let screenWidth = document.body.offsetWidth;
  // 列数
  let cols = Math.floor(screenWidth / boxWidth);
  // 容器居中
  container.style.width = boxWidth * cols + 'px';
  container.style.margin = '0 auto';


  // 盒子定位
  // 创建一个存储盒子高度的数组
  let heightArr = [];
  for (let i = 0; i < boxes.length; i++) {
    let boxHeight = boxes[i].offsetHeight;
    if (i < cols) {
      heightArr.push(boxHeight);
    } else {
      // 求出最矮的盒子高度
      let minBoxHeight = Math.min.apply(this, heightArr);
      // 拿到最矮盒子的索引
      let minBoxIndex = heightArr.indexOf(minBoxHeight);
      // 盒子瀑布流定位
      boxes[i].style.position = 'absolute';
      boxes[i].style.top = minBoxHeight + 'px';
      boxes[i].style.left = minBoxIndex * boxWidth + 'px';
      // 更新高度数组中的原最矮高度，继续拼接
      heightArr[minBoxIndex] += boxHeight;
    }
  }
}


// 加载更多规则
// 滚动哦浏览器最下方到达图片的高度的一半时加载
function checkWillLoad() {
  // 拿到最后一个盒子的高度的一半，加上盒子与浏览器顶部的偏离位置
  let boxes = document.getElementById('main').getElementsByClassName('box');
  let lastBox = boxes[boxes.length - 1];
  let lastBoxDis = lastBox.offsetHeight * 0.5 + lastBox.offsetTop;

  // 求出浏览器的高度
  let screenHight = document.documentElement.clientHeight;
  // 求出目前页面偏离屏幕的高度
  // 解决浏览器兼容问题
  let bodyscrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
  let scrollTopHeight = bodyscrollTop;
  console.log(lastBoxDis);
  console.log(screenHight + scrollTopHeight);
  // 判断是否滚到了指定位置
  return lastBoxDis <= (screenHight + scrollTopHeight);

}


window.onload = function() {
  waterFall('main', 'box');

  // 滚动加载盒子
  window.onscroll = function() {
    if (checkWillLoad()) {
      console.log(1);
      // 测试数据
      let data = {
        'dataImg':[{'img':'0.png'},
                  {'img':'1.png'},
                  {'img':'2.png'},
                  {'img':'3.png'},
                  {'img':'4.png'},
                  {'img':'5.png'},
                  {'img':'6.png'},
                  {'img':'7.png'}]
      }
      // 加载数据
      for (let i=0;i<data.dataImg.length;i++) {
        //创建包裹盒子
        let newBox = document.createElement('div');
        newBox.className = 'box';
        // 创建图片盒子
        let newPic = document.createElement('div');
        newPic.className = 'pic';
        newBox.appendChild(newPic);
        //创建图片
        let newImg = document.createElement('img');
        newImg.src = 'img/' + data.dataImg[i].img;
        newPic.appendChild(newImg);

        document.getElementById('main').appendChild(newBox);
      }
      //把刚创建的盒子瀑布流布局
      waterFall('main','box');
    }
  }
}
