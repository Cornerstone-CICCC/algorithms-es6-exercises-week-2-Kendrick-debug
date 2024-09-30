/*
In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings like December 2nd, 2017.

Talking Calendar
We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.

Instruction
Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017.
*/

const talkingCalendar = function (date) {
  const [year, month, day] = date.split("/");

  // Array of month names
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthName = months[parseInt(month) - 1];

  const getDaySuffix = (day) => {
    if (day.endsWith("1") && !day.endsWith("11")) {
      return "st";
    } else if (day.endsWith("2") && !day.endsWith("12")) {
      return "nd";
    } else if (day.endsWith("3") && !day.endsWith("13")) {
      return "rd";
    } else {
      return "th";
    }
  };
  const formattedDay = parseInt(day) + getDaySuffix(day);

  return `${monthName} ${formattedDay}, ${year}`;
};

console.log(talkingCalendar("2017/12/02")); // December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); // November 11th, 2007
console.log(talkingCalendar("1987/08/24")); // August 24th, 1987

module.exports = talkingCalendar;
