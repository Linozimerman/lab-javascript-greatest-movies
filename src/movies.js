// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map ((movie) => {
        return movie.director;
    })
    return directors;
    
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenAndDrama = moviesArray.filter((movie)=>{
        const isSteven = movie.director === 'Steven Spielberg';
        const isDrama = movie.genre.includes('Drama');
        
        return isSteven && isDrama
    })
    return stevenAndDrama.length;
    
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    
    const sum = moviesArray.reduce((acc, current)=>{
        //sum = acc + current;
        if(current.score){
            return acc + current.score;
        } else{
            return acc;
        }
        
    },0)

    const result = sum / moviesArray.length;

    return result ;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }


    const dramaArray = moviesArray.filter((movie)=>{
       
        return movie.genre.includes('Drama');


    })
    
    const sum = dramaArray.reduce((acc, current)=>{
        //sum = acc + current;
        if(current.score){
            return acc + current.score;
        } else{
            return acc;
        }
        
    },0)

    const result = (sum / dramaArray.length).toFixed(2);

    return Number(result);
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    /*const byYear = [...moviesArray]

    byYear.sort((a,b)=>{
        const aMoviesYear = a.year
        const bMoviesYear = b.year

        if(aMoviesYear < bMoviesYear){
            return -1
        } else if (aMoviesYear > bMoviesYear){
            return 1
        } else {
            return 0;
        }
        
    } )
    return byYear;*/

    const byYear = [...moviesArray]

    byYear.sort((a,b)=>{
        if (a.year !== b.year){
            return a.year - b.year
        } else if(a.year === b.year){
            
            return a.title.localeCompare(b.title)
        }
        
    } )
    return byYear;




}






// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
