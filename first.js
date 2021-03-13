
const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
    personalMovieDB.detectPersonalLevel();
  },

  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log('Просмотренно довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман');
    } else {
      console.log('Произошла ошибка');
    }
  },


  rememberMyFilms: function () {
    for (let i = 1; i <= 2;) {
      const filmName = prompt('Один из последних просмотренных фильмов?', ''),
        filmRate = prompt('На сколько оцените его?', '');
      if (filmRate == '' || filmName == '' ||
        filmName == null || filmRate == null || filmName.length >= 50) {} else {
        personalMovieDB.movies[filmName] = filmRate;
        i++;
      }
    }
  },

  writeYourGenres: function() {
    for (let i = 1; i <= 3;) {
      let filmGenre = prompt(`Ваш любимый жанр под номером ${i}`, '');

      if (filmGenre == '' || filmGenre == null || filmGenre.length >= 50) {

      } else {
        personalMovieDB.genres[i - 1] = filmGenre;
        i++;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${++i} - это ${item}`);
    });

  },

  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },

  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true ;
    }
  }

};


personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);