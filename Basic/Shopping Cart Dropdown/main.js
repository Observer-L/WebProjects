window.onload = () => {
  let ul_items = document.getElementsByClassName('items')[0];
  let li_items = ul_items.getElementsByTagName('li');

  // 设置li为可拖拽
  [].forEach.call(li_items, item => item.draggable = "true");

  // 监听li拖拽起始事件
  [].forEach.call(li_items, item => item.addEventListener('dragstart', (e) => {
    item.style.opacity = "0.5";
    item.style.background = "#000";
    item.style.color = "#fff";
    let item_name = item.childNodes[0].textContent;
    let count = 1;
    let price = count * (item.getElementsByTagName('span')[0].innerText);
    var obj = e.dataTransfer;
    obj.setData("text/html", addCart(item_name, count, price));
  }, true));
  [].forEach.call(li_items, item => item.addEventListener('dragend', (e) => {
    item.style.opacity = "0.9";
  }, true))


  let cartTable = document.getElementsByClassName('cartTable')[0];
  let cart = cartTable.getElementsByClassName('cart')[0];

  cartTable.addEventListener('drop', (e) => {
    let obj = e.dataTransfer;
    let item = obj.getData('text/html');
    cart.tBodies[0].innerHTML += item;
    countPrice();
    e.preventDefault();
    e.stopPropagation();
  })

  //添加页面的dragover事件
  document.ondragover = function(e) {
    //阻止默认方法,取消拒绝被拖放
    e.preventDefault();
  }
  //添加页面drop事件
  document.ondrop = function(e) {
    //阻止默认方法,取消拒绝被拖放
    e.preventDefault();
  }


  function addCart(item, count, price) {
    let cartItem = `
    <tr>
      <td class="item">${item}</td>
      <td class="count"><input type="text" value="${count}"></td>
      <td class="price">${price}</td>
      <td>${price}</td>
    </tr>`
    return cartItem;

  }


  function countPrice() {
    let itemsCount = document.querySelectorAll('.cart .count input');
    [].forEach.call(itemsCount, c => c.addEventListener('change', (e) => {
      let price = c.parentNode.parentNode.getElementsByClassName('price')[0];
      const prePrice = c.parentNode.parentNode.getElementsByTagName('td')[3].innerText;
      if (c.value < 0 || c.value == '') c.value = 0;
      c.parentNode.innerHTML = `<input type="text" value="${c.value}">`
      countPrice();
      price.innerText = c.value * prePrice;
      e.preventDefault();
    }))
  }
  countPrice();
}
