
window.onload=function(){
  var width=window.width
  var height=window.height
  var div=document.querySelector('#frameSize');
  div.setAttribute('width',width);
  div.setAttribute('height',height);
  var sceneEl=document.querySelector('#splash');
  var text=document.querySelector('a-text');
  sceneEl.appendChild(text);

}
function touchEvent1(){
  var text1=document.querySelector('#text1');
  text1.parentNode.removeChild(text1);

  var text2=document.querySelector('#text2');
  var mapEl=document.querySelector('a-image');
  sceneEl.appendChild(mapEl);
  sceneEl.appendChild(text2);
}

function touchEvent2(){
  sceneEl.parentElement.removeChild(sceneEl);
  var cameraEl=document.querySelector('.camera');
  cameraEl.parentElement.removeChild(cameraEl);
  bookNav();
}

function bookNav(){
  var bookEl=document.querySelector('#bookEl');
  var book=document.createElement('a-obj-model');
  book.setAttribute('src','#object');
  book.setAttribute('mtl','#material');
  book.setAttribute('position','0 -3 -12');
  book.setAttribute('align','center');
  book.setAttribute('rotation','0 -90 0');
  bookEl.appendChild(book);
  bookEl.addEventListener('click',function(evt){
    console.log('I was clicked at bookEl');
  })

  }  
  
