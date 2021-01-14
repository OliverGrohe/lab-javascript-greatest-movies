// Iteration 1: All directors? - Get the array of all directors.
/*
function getAllDirectors(moviesArr) {
    let directorsArr = moviesArr.map((movie => {
        return movie.director
    }))
    return directorsArr
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArr) {
    let filteredArr = moviesArr.filter(movie => {
            return movie.director == "Steven Spielberg" && movie.genre == "Drama"
    })
    return filteredArr.length
}

let numberOfMovies = howManyMovies(movie)
console.log(numberOfMovies)

*/

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
/*
function ratesAverage(moviesArr) {
    let reducedArr = moviesArr.reduce((acc, elem) => {
        if (elem.rate) {
            return acc + elem.rate
        }
    })
}
console.log(ratesAverage)

*/
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(moviesArr) {
       if (moviesArr.length === 0) {
        return null
      }
      
       let total = moviesArr.reduce((acc, elem) => {
         if (elem.genre == "Drama") {
           return acc + elem.genre
         }
         else {
           return acc
         }
       }, 0)
       
      let average = total/moviesArr.length
      return  average.toFixed(2);
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
/*
function orderByYear(moviesArr) {

}
*/
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
/*
function orderAlphabetically(moviesArr) {
    let cloneArr =  JSON.parse(JSON.stringify(movies))

    cloneArr.sort(a, b) => {
        
        }
    }
}
*/
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average