// 添加信息
let addBtn = document.getElementsByClassName('add')[0];
addBtn.addEventListener('click', (e) => {
  let tr = document.createElement('tr');
  let tbody = document.getElementsByTagName('tbody')[0];
  tr.classList.add('data');
  tr.innerHTML = `
							<td><input type="text" placeholder="please input your message"></td>
							<td>
								<span class="btn up">↑</span>
								<span class="btn down">↓</span>
								<span class="btn delete">×</span>
							</td>`

  bindBtns(tr);
  tbody.appendChild(tr);
})


// 按钮绑定事件
function bindBtns(tr) {
  let delBtns = tr.getElementsByClassName('delete')[0];
  let upBtns = tr.getElementsByClassName('up')[0];
  let downBtns = tr.getElementsByClassName('down')[0];

  delBtns.addEventListener('click', (e) => {
    delBtns.parentNode.parentNode.parentNode.removeChild(delBtns.parentNode.parentNode);
  })

  upBtns.addEventListener('click', (e) => {
    let data = document.getElementsByClassName('data');
    data[0].parentNode.insertBefore(tr, data[tr.rowIndex - 2])
  })

  downBtns.addEventListener('click', (e) => {
    let data = document.getElementsByClassName('data');
    if (data[tr.rowIndex] == undefined) {
      tr.parentNode.insertBefore(tr, data[0])
    } else {
      tr.parentNode.insertBefore(data[tr.rowIndex], tr)
    }
  })
}


// 输出数据
document.querySelector('.export button').addEventListener('click', (e) => {
  let output = document.querySelector('.export p');
  let input = document.getElementsByTagName('input');
  let data = {};
  var j = 0;
  [].forEach.call(input, function(i) {
    i.index = j;
    data[i.index] = i.value;
    j++;
  });
  console.log(JSON.stringify(data));
  output.style.display = 'block';
  output.innerText = JSON.stringify(data);
})


// 初始化
window.onload = function() {
  let init_data = document.getElementsByClassName('data');
  [].forEach.call(init_data, tr => bindBtns(tr));
}
