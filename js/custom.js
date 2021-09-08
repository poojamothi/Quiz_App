var skip=document.getElementById('skip');
var score=document.getElementById('score');
var totalscore=document.getElementById('totalscore');
var countdown=document.getElementById('countdown');
var count=0;
var scoreCount=0;
var duration=0;
var qaSet=document.querySelectorAll('.qa_set');
var qaAnsRow=document.querySelectorAll('.qa_set .qa_ans_row input');

skip.addEventListener('click',function(){
  step();

})
qaAnsRow.forEach(function(qaAnsRowSingle){
  qaAnsRowSingle.addEventListener('click',function(){
    setTimeout(function(){
      step();

    },500)
    var valid=this.getAttribute("valid");
    if(valid=="valid"){
      scoreCount+=20;
      score.innerHTML=scoreCount;
      totalscore.innerHTML=scoreCount;
    }else{
      scoreCount-=20;
      score.innerHtml=scoreCount;
      totalscore.innerHtml=scoreCount;

    }
  })
});

function step(){
  count+=1;
  for(var i=0;i<qaSet.length;i++){
    qaSet[i].className='qa_set';
  }
    qaSet[count].className='qa_set active';
    if(count==5){
      skip.style.display='none';
      clearInterval(durationTime);
      countdown.innerHTML=0;
    }

}
