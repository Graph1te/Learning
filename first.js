let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();


const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert('Просмотренно довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
  } else {
    alert('Произошла ошибка');
  }
}

detectPersonalLevel();

function rememberMyFilms() {
  for (let i = 1; i <= 2;) {
    const filmName = prompt('Один из последних просмотренных фильмов?', ''),
      filmRate = prompt('На сколько оцените его?', '');
    if (filmRate == '' || filmName == '' ||
      filmName == null || filmRate == null || filmName.length >= 50) {} else {
      personalMovieDB.movies[filmName] = filmRate;
      i++;
    }
  }
}

rememberMyFilms();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}


function writeYourGenres() {
  for (let i = 1; i <= 3;) {
    let filmGenre = prompt(`Ваш любимый жанр под номером ${i}`, '');

    if (filmGenre == '' || filmGenre == null || filmGenre.length >= 50) {
    } else {
      personalMovieDB.genres[i-1] = filmGenre;
      i++;
    }
  }

}
writeYourGenres();
showMyDB(personalMovieDB.privat);