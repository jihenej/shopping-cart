var plus = document.getElementsByClassName('btn-plus');
var counter = document.getElementsByClassName('counter');
var minus = document.getElementsByClassName('btn-minus');

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener('click', function () {
    counter[i].innerText++;
  });

  minus[i].addEventListener('click', function () {
    if (counter[i].innerText > 0) counter[i].innerText--;
  })
}

var btnlike = document.getElementsByClassName('btn')
var like = document.querySelectorAll('.far.fa-heart')
for(let i=0; i<btnlike.length; i++){
  btnlike[i].addEventListener('click', function () {
  if(like[i].style.color == 'rgb(250, 128, 114)') like[i].style.color = 'black';
  else like[i].style.color = 'rgb(250, 128, 114)';
  })
}
function total() {
  var quantity = document.querySelectorAll('counter')
  var prix = document.querySelectorAll('')
}






var del = document.querySelectorAll('.btn-delete')
var item = document.querySelectorAll('.item')
for(let i=0; i < del.length; i++){
  del[i].addEventListener('click', function (){
 item[i].remove();
});
}












