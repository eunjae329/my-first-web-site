var Body = {
  setBackgroundColor : function(color){
    $('body').css('backgroundColor',color);
    // document.querySelector('body').style.backgroundColor = color;
  },
  setColor : function(color){
    $('body').css('color',color);
    // document.querySelector('body').style.color = color;
  }
}
var Links = {
  setColor : function(color){
    $('a').css('color', color);
    // var i = 0;
    // var alist = document.querySelectorAll('a');
    // while (i < alist.length){
    //   alist[i].style.color = color;
    //   i = i + 1;
    // } 
  }
}

function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value=='night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    Links.setColor('darkgreen'); 
    self.value='day';
  } else {
    Body.setBackgroundColor('mediumseagreen');
    Body.setColor('black');        
    Links.setColor('black');
    self.value='night';
  }
}
var count=0;
function like() {
  count +=1;
  alert("좋아요를 누르셨습니다! 좋아요:"+count);
}