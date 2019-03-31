/*** ===================================================================== ***\
 ** - PROBLEM ------------------------------------------------------ **
 * ========================================================================= *

  Write a function which formats a duration, given as a number of seconds, in a human-friendly way.

  * The function must accept a non-negative integer. 
  * If zero, just returns "now". 
  * Else, the duration is expressed as a combination of years, days, hours, minutes and seconds.

  EXAMPLE :-
  
    formatDuration(62)    // returns "1 minute and 2 seconds"
    formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
  
  For the purpose of this Kata, a year is 365 days and a day is 24 hours.

  **Note that spaces are important.**

  Detailed rules
    The resulting expression is made of components like 4 seconds, 1 year, etc. 
    In general, a positive integer and one of the valid units of time, separated by a space. 
    The unit of time is used in plural if the integer is greater than 1.
    The components are separated by a comma and a space (", ").
    Except the last component, which is separated by " and ", just like it would be written in English.
    A more significant units of time will occur before than a least significant one. 
    Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.
    Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.
    A component will not appear at all if its value happens to be zero.
    Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.
    A unit of time must be used "as much as possible". 
    It means that the function should not return 61 seconds, but 1 minute and 1 second instead. 
    Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.


    https://www.codewars.com/kata/human-readable-duration-format/train/javascript

\*** ===================================================================== ***/

const DAYS = 365,
  HOURS = 24,
  MINUTES = 60,
  SECONDS = 60;

const SINGULAR_TIME_STRINGS = ['year', 'day', 'hour', 'minute', 'second'];

// parse the time into hours, minutes and seconds.
function formatDuration(seconds) {
  if (seconds === 0) return 'now';

  return mapTimesWithAlphabets(parseTime(seconds));
}

function mapTimesWithAlphabets(time) {
  const withoutSeconds = time
    .map((t, idx) => {
      const isSecond = idx === 4;
      if (!isSecond && t > 0) {
        return `${t} ${SINGULAR_TIME_STRINGS[idx]}${t > 1 ? 's' : ''}`;
      }
    })
    .filter(x => x)
    .join(', ');

  const withSeconds =
    time[4] > 0
      ? `${time[4]} ${SINGULAR_TIME_STRINGS[4]}${time[4] > 1 ? 's' : ''}`
      : '';

  if (withoutSeconds.length === 0) return withSeconds;
  if (withSeconds.length === 0) return withoutSeconds;

  return `${withoutSeconds} and ${withSeconds}`;
}

function parseTime(time) {
  const years = Math.floor(time / (DAYS * HOURS * MINUTES * SECONDS));
  const yearInMs = years * DAYS * HOURS * MINUTES * SECONDS;

  const days = Math.floor((time - yearInMs) / (HOURS * MINUTES * SECONDS));
  const daysInMs = days * HOURS * MINUTES * SECONDS;

  const hours = Math.floor((time - yearInMs - daysInMs) / (MINUTES * SECONDS));
  const hoursInMs = hours * MINUTES * SECONDS;

  const minutes = Math.floor(
    (time - yearInMs - daysInMs - hoursInMs) / SECONDS
  );
  const minutesInMs = minutes * SECONDS;

  const seconds = Math.floor(
    time - yearInMs - daysInMs - hoursInMs - minutesInMs
  );

  return [years, days, hours, minutes, seconds];
}

console.log(
  formatDuration(132030240) === '4 years, 68 days, 3 hours and 4 minutes'
);
// console.log(formatDuration(1) === '1 second');
// console.log(formatDuration(62) === '1 minute and 2 seconds');
// console.log(formatDuration(120));
// console.log(formatDuration(120) === '2 minutes');
// console.log(formatDuration(3600) === '1 hour');
// console.log(formatDuration(3662) === '1 hour, 1 minute and 2 seconds');
// console.log(
//   formatDuration(205851834) ===
//     '6 years, 192 days, 13 hours, 3 minutes and 54 seconds'
// );
