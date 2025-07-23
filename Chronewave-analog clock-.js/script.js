/* 
12h= 360degree
1h=?  // 360/12=30degree
h hours=?   // 30*h + m/2;
*/

/*
60min=30deg
1min=30/60==>1/2degree
m min=(1/2)m;
*/

/*
60min=360deg
1min=360/60==>6deg
m min=6*m
*/

/*
60sec= 360deb
1sec=360/60
*/



let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime() {
  let date = new Date();
  
  // ✅ Correct method names
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hRotation = 30 * hh + mm / 2;
  let mRotation = 6 * mm;
  let sRotation = 6 * ss;

  hr.style.transform = `rotate(${hRotation}deg)`;
  min.style.transform = `rotate(${mRotation}deg)`;
  sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);
