const movies = {
  action: ["Die Hard", "John Wick", "The Matrix"],
  comedy: ["The Hangover", "Bridesmaids", "Step Brothers"],
  drama: ["The Shawshank Redemption", "The Godfather", "Schindler's List"],
  horror: ["The Shining", "A Nightmare on Elm Street", "The Exorcist"],

  listMoviesByGenre: function (genre) {
    if (this[genre]) {
      return `Список фільмів в жанрі ${genre} - ${this[genre]}`;
    } else {
      return `Такого жанру ${genre} немає`;
    }
  },
};
movies.listMoviesByGenre("comedy");
console.log(movies.listMoviesByGenre("comedy"));
movies.listMoviesByGenre("sci-fi");
console.log(movies.listMoviesByGenre("sci-fi"));
