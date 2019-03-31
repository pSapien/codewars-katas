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

const createMap = obj => {
  const timeStrValueMap = new Map();

  for (let key in obj) {
    timeStrValueMap.set(key, obj[key]);
  }

  return timeStrValueMap;
};

const getSingularOrPluralTimeWithStr = (str, val) =>
  `${val} ${str}${val > 1 ? 's' : ''}`;

const formatDuration = seconds =>
  seconds === 0 ? 'now' : mapTimesWithAlphabets(parseTime(seconds));

function mapTimesWithAlphabets(time) {
  const timeMap = createMap(time);

  const allKeys = Array.from(timeMap.keys());
  const allValues = Array.from(timeMap.values());

  const lastKey = allKeys.pop();
  const lastValue = allValues.pop();

  const lastKeyValueTimeDenote = getSingularOrPluralTimeWithStr(
    lastKey,
    lastValue
  );

  if (allKeys.length === 0 && allValues.length === 0) {
    return lastKeyValueTimeDenote;
  }

  const allTimeDenoteMinusLast = allKeys
    .map(key => getSingularOrPluralTimeWithStr(key, timeMap.get(key)))
    .join(', ');

  return `${allTimeDenoteMinusLast} and ${lastKeyValueTimeDenote}`;
}

// optimize this, look sloppy.
function parseTime(time) {
  const { floor: fl } = Math;

  const year = fl(time / (DAYS * HOURS * MINUTES * SECONDS));
  const yearInMs = year * DAYS * HOURS * MINUTES * SECONDS;

  const day = fl((time - yearInMs) / (HOURS * MINUTES * SECONDS));
  const daysInMs = day * HOURS * MINUTES * SECONDS;

  const hour = fl((time - yearInMs - daysInMs) / (MINUTES * SECONDS));
  const hoursInMs = hour * MINUTES * SECONDS;

  const minute = fl((time - yearInMs - daysInMs - hoursInMs) / SECONDS);
  const minutesInMs = minute * SECONDS;

  const second = fl(time - yearInMs - daysInMs - hoursInMs - minutesInMs);

  return {
    ...(year && { year }),
    ...(day && { day }),
    ...(hour && { hour }),
    ...(minute && { minute }),
    ...(second && { second }),
  };
}
