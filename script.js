//first define the audio element
const audioString = "http://www.mariomayhem.com/downloads/sounds/super_mario_bros/smb_world_clear.wav";
const alarm = document.createElement('audio');
alarm.setAttribute("src", audioString);

//WOW THIS CODE IS REALLY NOT DRY
//will refactor after it's good
let running = false;
let working = true;

// click listeners nd other functions
$(document).ready(function(){
  $("#session-increment").click(function(){
    let value = ($("#session-length").text());
    value++;
    if(value<61){
      $("#session-length").text(value);
      if($("#timer-label").text() == 'Work!'){
        let mirror = value < 10 ? '0'+value+':00' : value+':00' ;
        $("#time-left").text(mirror);
      }
    }
  });

  $("#session-decrement").click(function(){
    let value = ($("#session-length").text());
    value--;
    if(value>0){
      $("#session-length").text(value);
      if($("#timer-label").text() == 'Work!'){
        let mirror = value < 10 ? '0'+value+':00' : value+':00' ;
        $("#time-left").text(mirror);
      }
    }
  });

  $("#break-increment").click(function(){
    let value = ($("#break-length").text());
    value++;
    if(value<61){
      $("#break-length").text(value);
      if($("#timer-label").text() == 'Break!'){
        let mirror = value < 10 ? '0'+value+':00' : value+':00' ;
        $("#time-left").text(mirror);
      }
    }
  });

  $("#break-decrement").click(function(){
    let value = ($("#break-length").text());
    value--;
    if(value>0){
      $("#break-length").text(value);
      if($("#timer-label").text() == 'Break!'){
        let mirror = value < 10 ? '0'+value+':00' : value+':00' ;
        $("#time-left").text(mirror);
      }
    }
  });
    $("#reset").click(function(){
      $("#break-length").text('5');
      $("#session-length").text('25');
      $("#time-left").text('25:00');
      $("#timer-label").text("Work!");
      clearInterval(timer);
  });

  function reduceTime(){

    let timeLeft =$("#time-left").text();
    seconds = timeLeft.split(':')[1];             //get elements after colon
    minutes = timeLeft.split(':')[0];            //get elements before colon

    if(!(minutes == 0 && seconds == 0)){
      if(seconds == 00){
        minutes--;
        seconds = 59;
      }
      else if(seconds>0){
        seconds--;
      }
      seconds = seconds < 10 ? '0'+seconds : seconds;
      $("#time-left").text(minutes+":"+seconds);
    }
    else{
      alarm.play();
      clearInterval(timer);
      if(working){
        $("#timer-label").text('Break!');

      }
      else{
        $$("#timer-label").text('Work!');
      }
    }
  }


  $("#start_stop").click(function(){
      if(!running){
          timer = setInterval(reduceTime, 1000);
          running = true;
      }
      else{
        clearInterval(timer);
        running = false;
      }


});

});
