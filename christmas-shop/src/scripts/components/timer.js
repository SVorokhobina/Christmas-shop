const msInOneDay = 86400000; // milliseconds in one full day, 1000 * 60 * 60 * 24
const msInOneHour = 3600000; // milliseconds in one full hour, 1000 * 60 * 60
const msInOneMinute = 60000; // milliseconds in one full minute, 1000 * 60
const msInOneSecond = 1000; // milliseconds in one full second

const daysPlaceholder = document.querySelector('.timer__days');
const hoursPlaceholder = document.querySelector('.timer__hours');
const minutesPlaceholder = document.querySelector('.timer__minutes');
const secondsPlaceholder = document.querySelector('.timer__seconds');

export function setSliderYear() {
  const year = getDate().getFullYear();
  const placeholder = document.querySelector('.year-placeholder');
  placeholder.textContent = String(year + 1);
}

export function setTimer() {
  const currentDate = getDate();
  const newYear = getNewYearDate();
  const diff = newYear.getTime() - currentDate.getTime();

  setInitialTimer(diff);
  setInterval(updateTimer, 1000);
}

function getDate() {
  const currentDate = new Date();
  return currentDate;
}

function getNewYearDate() {
  const currentYear = getDate().getFullYear();
  const newYear = new Date();
  newYear.setUTCFullYear(currentYear + 1, 0, 1);
  newYear.setUTCHours(0, 0, 0);
  return newYear;
}

function setInitialTimer(num) {
  const daysNumber = Math.trunc(num / msInOneDay);
  daysPlaceholder.textContent = daysNumber;

  const hoursDiff = num - daysNumber * msInOneDay;
  const hoursNumber = Math.trunc(hoursDiff / msInOneHour);
  hoursPlaceholder.textContent = hoursNumber;

  const minutesDiff = hoursDiff - hoursNumber * msInOneHour;
  const minutesNumber = Math.trunc(minutesDiff / msInOneMinute);
  minutesPlaceholder.textContent = minutesNumber;

  const secondsDiff = minutesDiff - minutesNumber * msInOneMinute;
  const secondsNumber = Math.trunc(secondsDiff / msInOneSecond);
  secondsPlaceholder.textContent = secondsNumber;
}

function updateTimer() {
  let seconds = Number(secondsPlaceholder.textContent);
  let minutes = Number(minutesPlaceholder.textContent);
  let hours = Number(hoursPlaceholder.textContent);
  let days = Number(daysPlaceholder.textContent);

  if (seconds !== 0) {
    seconds -= 1;
    secondsPlaceholder.textContent = seconds;
    return;
  } else {
    seconds = 59;
    secondsPlaceholder.textContent = seconds;
  }

  if (minutes !== 0) {
    minutes -= 1;
    minutesPlaceholder.textContent = minutes;
    return;
  } else {
    minutes = 59;
    minutesPlaceholder.textContent = minutes;
  }

  if (hours !== 0) {
    hours -= 1;
    hoursPlaceholder.textContent = hours;
    return;
  } else {
    hours = 23;
    hoursPlaceholder.textContent = hours;
  }

  if (days !== 0) {
    days -= 1;
    daysPlaceholder.textContent = days;
    return;
  } else {
    let year = getDate().getFullYear();
    if (year % 4 === 0) {
      days = 365;
    } else {
      days = 364;
    }
    daysPlaceholder.textContent = days;
    setSliderYear();
  }
  return;
}
