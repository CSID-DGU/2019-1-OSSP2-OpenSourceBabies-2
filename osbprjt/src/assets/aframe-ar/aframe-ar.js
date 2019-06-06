window.onload=function(){
  document.querySelector('a-text').addEventListener('click', function (evt){
      console.log('I was clicked at: ', evt.detail.intersection.point);
      this.setAttribute('color','black');
  });
  
  }
  
  