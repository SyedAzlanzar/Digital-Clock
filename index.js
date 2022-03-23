// var container = document.getElementById("clockcontainer");
// var creatediv = document.createElement("div");
var creatediv = document.getElementById("AM-PM");
//  var a = creatediv.innerText = "PM";
// creatediv.classList.add("AM");
// container.appendChild(creatediv);
function clock() {
  var today = new Date();
  hours = today.getHours();
  if (hours >= 12) {
    hours = "0" + (hours - 12);
    creatediv.innerText = 'PM'
} 
  else if (hours <= 10 || hours<12) {
    hours = "0" + hours;
    creatediv.innerText = 'AM';
    
  }
  hours = hours;

  var minutes = today.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  minutes = minutes;
  var seconds = today.getSeconds();
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  seconds = seconds;

  var time = hours + " : " + minutes + " : " + seconds;
  document.getElementById("gethours").innerText = hours;
  document.getElementById("getmins").innerText = minutes;
  document.getElementById("getsec").innerText = seconds;
  // setIntervalRef=setInterval(clock,1000)


  
  
}
var setIntervalRef = setInterval(clock, 1000);


function startclock() {
  setIntervalRef = setInterval(clock, 1000);
}

function stopclock() {
  clearInterval(setIntervalRef);
  // document.getElementById('stopclock').onclick = setIntervalRef ;
}

// var minutes = 0;
// var seconds = 0;
