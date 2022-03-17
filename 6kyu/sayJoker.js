/**
 * url https://www.codewars.com/kata/5a353a478f27f244a1000076/train/javascript
 */

function sayJoke(apiUrl, jokeId) {
  return fetch(apiUrl)
    .then(res => res.json())
    .then(json => {
      const foundJoke = json.jokes.find(joke => joke.id === jokeId);
      if (!foundJoke) throw new Error(`No jokes found id: ${jokeId}`);

      return {
        saySetup: () => foundJoke.setup,
        sayPunchLine: () => foundJoke.punchLine,
      }
    }).catch(error => {
      throw (error instanceof TypeError) ? new Error(`No jokes at url: ${apiUrl}`) : error
    })
}
