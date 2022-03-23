var start = document.getElementById("startbtn");
// var sec = parseInt(document.getElementById('sec').innerText)
// var min = parseInt(document.getElementById('min').innerText)
// console.log(sec)

var sec = 1;
var min = 58;
var hrs = 0;
function xyz() {
  sec = sec;

  if (sec < 61) {
    console.log(sec);
    if (sec <= 9) {
      document.getElementById("sec").innerText = "0" + sec;
    } 
    else {
      document.getElementById("sec").innerText = sec;
    }
    sec += 1;

    if (sec == 60) {
      document.getElementById("sec").innerText = "00";

          if (min <= 9) {
            min += 1;
            document.getElementById("min").innerText = "0" + min;
            sec = 0;
        }     
        else {
            ++min;
            document.getElementById("min").innerText = min;
            sec = 0;
        }
    }

    if (min == 60) {
        document.getElementById("min").innerText = "00";
            if (hrs <= 9) {
            hrs += 1;
            document.getElementById("hrs").innerText = "0" + hrs;
            min = 0;
      } 
      else {
            hrs += 1;
            document.getElementById("hrs").innerText = hrs;
            min = 0;
      }
    }
  }
}
var setref;
start.addEventListener("click", () => {
  setref = setInterval(xyz, 1000);
});

var stop = document.getElementById("stopbtn");
stop.addEventListener("click", () => {
  clearInterval(setref);
});

var reset = document.getElementById("resetbtn");
reset.addEventListener("click", () => {
  sec = 0;
  min = 0;
  hrs = 0
  clearInterval(setref);
  document.getElementById("sec").innerText = "00";
  document.getElementById("min").innerText = "00";
  document.getElementById("hrs").innerText = "00";
});
