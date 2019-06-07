
window.onload=function(){
  var sceneEl=document.querySelector('#splash');
  sceneEl.addEventListener('click', function (evt){
      console.log('I was clicked at: ', evt.detail.intersection.point);
      var text=document.querySelector('a-text');
      text.parentNode.removeChild(text);
      var mapEl=document.createElement('a-image')
      var textEl=document.createElement('a-text')
      var textaniEl=document.createElement('a-animation');
      mapEl.setAttribute('src','#map');
      mapEl.setAttribute('position','0 0 -1');
      mapEl.setAttribute(
        'geometry',{primitive: 'plane',
         height: '0.5',
          width: '1'}
      )
      textEl.setAttribute('value','if arrived, touch!');
      textEl.setAttribute('color','red');
      textEl.setAttribute('align','center');
      textEl.setAttribute('width','2');
      textEl.setAttribute('position','0 0 -1');
      textEl.setAttribute(
        'geometry',{primitive: 'plane',
          width: '0.01',
          height: '0.01'
        }
      )
      textaniEl.setAttribute('attribute','text.opacity');
      textaniEl.setAttribute('to','0');
      textaniEl.setAttribute('from','1');
      textaniEl.setAttribute('dur','700');
      textaniEl.setAttribute('repeat','indefinite');
      textaniEl.setAttribute('direction','alternate');
      textEl.appendChild(textaniEl);

      sceneEl.appendChild(mapEl);
      sceneEl.appendChild(textEl);

      sceneEl.addEventListener('click', function (evt){
          console.log('I was clicked at: ', evt.detail.intersection.point);
          sceneEl.parentElement.removeChild(sceneEl);
          var cameraEl=document.querySelector('.camera');
          cameraEl.parentElement.removeChild(cameraEl);
          bookNav();
      });
  });
function bookNav(){
  var bookEl=document.querySelector('#bookEl');
  var book=document.createElement('a-obj-model');
  book.setAttribute('src','#object');
  book.setAttribute('mtl','#material');
  book.setAttribute('position','0 -3 -12');
  book.setAttribute('align','center');
  book.setAttribute('rotation','0 -90 0');
  bookEl.appendChild(book);
  }  
}
  
