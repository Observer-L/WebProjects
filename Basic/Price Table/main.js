let promos = document.getElementsByClassName('promo');

[].forEach.call(promos, promo=>promo.addEventListener('mouseenter', (e)=>{
  [].forEach.call(promos, promo=>{promo.classList.remove('scale');})
  promo.classList.add('scale');
}));
[].forEach.call(promos, promo=>promo.addEventListener('mouseleave', (e)=>{
  promos[1].classList.add('scale');
  promo.classList.remove('scale');
}))
