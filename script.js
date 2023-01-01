let output = document.getElementById("output");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let seconds = 0;
let minutes = 0;
let hours = 0;
const time = () => {
  seconds += 1;
  if (seconds == 60) {
    seconds = 0;
    minutes += 1;
  }
  if (minutes == 60) {
    minutes = 0;
    hours += 1;
  }
  let ans = `${hours} :: ${minutes} :: ${seconds}`;

  output.innerHTML = ans;
};
let id;
start.addEventListener("click", () => {
  start.disabled = true;
  stop.disabled = false;
  reset.disabled = false;
  id = setInterval(time, 1000);
});

stop.addEventListener("click", () => {
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = false;
  clearInterval(id);
});

reset.addEventListener("click", () => {
  start.disabled = false;
  stop.disabled = false;
  reset.disabled = true;
  hours = 0;
  minutes = 0;
  seconds = 0;
  ans = `${hours} :: ${minutes} :: ${seconds}`;
  clearInterval(id);
  output.innerHTML = ans;
});
