var buttonColors=["red", "green", "yellow", "blue"];
var gamePattern=[];




var userClickPattern=[];
$(".box").click(function(){
  var chosenColor=$(this).attr("id");
  userClickPattern.push(chosenColor);
playSound(chosenColor);
animatePress(chosenColor);
checkAnswer(userClickPattern.length-1);
});

function playSound(name){
  new Audio("sounds/" + name + ".mp3").play();
}
function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");
  setTimeout(function(){ $("#" + currentColor).removeClass("pressed");},15);
}
var started=false;
var level=0;
$(document).keypress(function(event){
  if(started==false){
    $("h1").text("Level: "+ level);
  nextSequence();
  started=true;
}
});

function nextSequence(){

  randomColor=buttonColors[Math.floor(4*Math.random())];
  gamePattern.push(randomColor);
  // $("#" + randomColor).click(function(event){
  //     $("#" + randomColor).animate({zoom:"98%"});
  //     setTimeout(function(){ $("#" + randomColor).animate({zoom:"98%"});}, 15);
$("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
      var audio=new Audio("sounds/" + randomColor + ".mp3");
      audio.play();
      level++;
      $("h1").text("Level: " + level);
}
function checkAnswer(currentLevel){
if(gamePattern[currentLevel]===userClickPattern[currentLevel]){
  console.log("Success");
  if(gamePattern.length===userClickPattern.length){
    setTimeout(function(event){
      nextSequence();
    }, 100);
    userClickPattern=[];
  }
}
else{
  new Audio('sounds/wrong.mp3').play();
  $("body").addClass("game-over");
   setTimeout(function(){
     $("body").removeClass("game-over");
   }, 200);
   $("h1").text("Game Over, Press Any Key to Restart");
   started=false;
   level=0;
   gamePattern=[];
   userClickPattern=[];
}
}
// var userClickPattern=[];
// $(".box").click(function(){
//   var chosenColor=this.attr('id');
//   userClickPattern.push(chosenColor);
//   console.log(userClickPattern);
// });






//
//
// var audio_green=new Audio('sounds/green.mp3');
// var audio_red=new Audio('sounds/red.mp3');
// var audio_yellow=new Audio('sounds/yellow.mp3');
// var audio_blue=new Audio('sounds/blue.mp3');
// $(".box").click(function(){
//   var cls=this.attr("class")[0];
//   click_play(cls);
// });
// function click_play(cls){
//   if(cls==="box-1"){
//     $(".box-1").animate({zoom:"98%"});
//     setTimeout(function(){
//       $(".box-1").animate({zoom:"100%"});},10);
//     audio_green.play();
//   }
//   else if(cls==="box-2"){
//     $(".box-2").animate({zoom:"98%"});
//     setTimeout(function(){
//       $(".box-2").animate({zoom:"100%"});},10);
//     audio_red.play();
//   }
//   else if(cls==="box-3"){
//     $(".box-3").animate({zoom:"98%"});
//     setTimeout(function(){
//       $(".box-3").animate({zoom:"100%"});},10);
//      audio_yellow.play();
//   }
//   else{
//     $(".box-4").animate({zoom:"98%"});
//     setTimeout(function(){
//       $(".box-4").animate({zoom:"100%"});},10);
//    audio_blue.play();
//   }
// }
// // $(".box-1").click(function(){
// //   // audio_green=new Audio('sounds/green.mp3');
// //   $(".box-1").animate({zoom:"98%"});
// //   setTimeout(function(){
// //     $(".box-1").animate({zoom:"100%"});},10);
// //   audio_green.play();
// // });
// // $(".box-2").click(function(){
// //   // audio_red=new Audio('sounds/red.mp3');
// //   $(".box-2").animate({zoom:"98%"});
// //   setTimeout(function(){
// //     $(".box-2").animate({zoom:"100%"});},10);
// //   audio_red.play();
// // });
// // $(".box-3").click(function(){
// //  // audio_yellow=new Audio('sounds/yellow.mp3');
// //  $(".box-3").animate({zoom:"98%"});
// //  setTimeout(function(){
// //    $(".box-3").animate({zoom:"100%"});},10);
// //   audio_yellow.play();
// // });
// // $(".box-4").click(function(){
// //    // audio_blue=new Audio('sounds/blue.mp3');
// //    $(".box-4").animate({zoom:"98%"});
// //    setTimeout(function(){
// //      $(".box-4").animate({zoom:"100%"});},10);
// //   audio_blue.play();
// // });
// var store;
// var gamePattern=[];
// var level=1;
// document.addEventListener("keypress", function(event){
//   keyPlay();
// });
// function keyPlay(){
// var num=Math.random();
// num=Math.floor(num*4)+1;
// store=num;
// if(num===1){
//   audio_green.play();
//
// }
// else if(num===2){
//   audio_red.play();
// }
// else if(num===3){
// audio_yellow.play();
// }
// else{
//   audio_blue.play();
// }
// $(".box-" + num).animate({zoom:"98%"});
// setTimeout(function(){ $(".box-" + num).animate({zoom:"100%"});},10);
// $("h1").text("level:" + level);
// gamePattern.push(num);
// }
//
// // var color_arr=["green", "red", "yellow", "blue"];
// var color_arr=[1,2,3,4];
//
// function randomColor(){
//   var n=Math.floor(3*Math.random());
// gamePattern.push(color_arr[n]);
// }
//
// while(level<11){
//   for(var i=0;i<gamePattern.length;i++){
//     document.addEventListener("click", function(event){
//       var temp="box-" + gamePattern[i];
//       if(event.class!=temp){
//         var audio_wrong=new Audio('sounds/wrong.mp3');
//         audio_wrong.play();
//         level=1;
//         keyPlay();
//         i=-1;
//       }
//     });
//   }
//   level++;
// }
