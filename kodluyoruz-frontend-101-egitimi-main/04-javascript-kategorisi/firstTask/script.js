const timeEl = document.getElementById("myClock");
const nameEl = document.getElementById("myName");

let getName = prompt("Lütfen isminizi giriniz ?");

// show the userName on screen
nameEl.innerHTML = getName;
// show the time (hour:minute:seconds)
setInterval(function () {
  let today = new Date();
  let time =
    today.getHours() +
    ":" +
    today.getMinutes() +
    ":" +
    (today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds());

  timeEl.innerHTML = time;
}, 1000);

// timeEl.innerHTML = "test-Time";
// nameEl.innerHTML = "test name";
