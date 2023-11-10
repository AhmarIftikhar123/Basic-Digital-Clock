const hours_opt = document.getElementById("hrs"),
  minutes_opt = document.getElementById("mins"),
  Seconds_opt = document.getElementById("secs");

let getTime = () => {
  let Current_date = new Date();
  let hours = Current_date.getHours();
  let minutes = Current_date.getMinutes();
  let seconds = Current_date.getSeconds();

  let hr = hours < 10 ? `0${hours}` : hours,
    min = minutes < 10 ? `0${minutes}` : minutes,
    sec = seconds < 10 ? `0${seconds}` : seconds;

    hours_opt.textContent = hr;
    minutes_opt.textContent = min;
    Seconds_opt.textContent = sec;
};

let timer = setInterval(() => {
    getTime();
}, 1000);