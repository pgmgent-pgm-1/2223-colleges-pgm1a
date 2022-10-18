const generateDigitalClockUTCAsString = (utc, cityName) => {
  const date = new Date();
  // calculate time in different zone
  date.setHours(date.getHours() + date.getTimezoneOffset() / 60 + utc);
  // return date
  return `The time in ${cityName} is ${padTime(date.getHours())}:${padTime(
    date.getMinutes()
  )}:${padTime(date.getSeconds())}`;
};

// add 0 if time is lower than 10, e.g. 08
const padTime = (number) => {
  if (number < 10) {
    return `0${number}`;
  }
  return `${number}`;
};

// deze functie wordt elke seconde uitgevoerd
const ticking = () => {
  console.log(generateDigitalClockUTCAsString(2, "Ghent"));
};

setInterval(ticking, 1000);
