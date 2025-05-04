const { DateTime } = require("luxon");

//Number 1
const now = DateTime.now();
console.log(now);

function birthDate() {
  let month = now.month;
  let numberOfDays = (12 - month) * 30;
  let todayDate = now.day;
  numberOfDays -= todayDate;
  numberOfDays -= 21;
  return numberOfDays;
}
birthDate();
console.log(birthDate());

// Number 2
function displayDays() {
  let year = now.year;
  let birthYear = 2004;
  year -= birthYear;
  let month = now.month;
  let birthMonth = 12;
  birthMonth -= month;
  let days = now.day;
  let birthDay = 9;
  birthDay -= days;
  let result = year + " years," + birthMonth + " months," + birthDay + " days,";
  return result;
}
displayDays();
console.log(displayDays());

// Number 3
function twoDates(date1, date2) {
  const now = DateTime.now();
  const array1 = date1.split("/");
  const array2 = date2.split("/");
  let year1 = Math.abs(now.year - array1[2]);
  let year2 = Math.abs(now.year - array2[2]);

  if (year1 > year2) {
    let result = date2 + " is closest to " + now.toString();
    return result;
  } else if (year1 < year2) {
    let result = date1 + " is closest to " + now.toString();
    return result;
  }

  let month1 = Math.abs(now.month - array1[0]);
  let month2 = Math.abs(now.month - array2[0]);

  if (month1 > month2) {
    let result = month1 + " is closest to " + now;
    return result;
  }
  if (month2 < month1) {
    let result = month2 + " is closest to " + now;
    return result;
  }

  let day1 = Math.abs(now.day - array1[0]);
  let day2 = Math.abs(now.day - array2[0]);
  if (day1 > day2) {
    let result = day1 + " is closest to " + now;
    return result;
  }
  if (day2 < day1) {
    let result = day2 + " is closest to " + now;
    return result;
  }
}
let date1 = "5/8/1893";
let date2 = "7/4/2390";

twoDates(date1, date2);
console.log(twoDates(date1, date2));

// Number 4
function whichDateCameFirst(before, after) {
  const [beforeMonth, beforeDay, beforeYear] = before.split("/").map(Number);
  const [afterMonth, afterDay, afterYear] = after.split("/").map(Number);

  const beforeDate = new Date(beforeYear, beforeMonth - 1, beforeDay);
  const afterDate = new Date(afterYear, afterMonth - 1, afterDay);

  if (beforeDate < afterDate) {
    return `${before} came before ${after}`;
  } else if (beforeDate > afterDate) {
    return `${after} came before ${before}`;
  } else {
    return `${before} and ${after} are the same date`;
  }
}

let before = "5/8/1893";
let after = "7/4/2390";

console.log(whichDateCameFirst(before, after));

//Number 5
const londonTime = DateTime.now().setZone("Europe/London");

console.log(
  "Current time in London:",
  londonTime.toFormat("HH:mm:ss - dd LLL yyyy")
);
