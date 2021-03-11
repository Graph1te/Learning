const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personaMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const filmName1 = prompt('Один из последних просмотренных фильмов?', ''),
  filmRate1 = prompt('На сколько оцените его?', ''),
  filmName2 = prompt('Один из последних просмотренных фильмов?', ''),
  filmRate2 = prompt('На сколько оцените его?', '');


personaMovieDB.movies[filmName1] = filmRate1;
personaMovieDB.movies[filmName2] = filmRate2;


console.log(personaMovieDB);


