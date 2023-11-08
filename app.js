const data = [
    {
        title: 'The Godfather',
        year: 1972,
        genre: 'Crime',
        rating: 9.2,
        type: 'movie'
    },
    {
        title: 'Game of Thrones',
        year: 2011,
        genre: 'Fantasy',
        rating: 9.3,
        type: 'tv',
        seasons: 8
    },
    {
        title: 'Inception',
        year: 2010,
        genre: 'Science Fiction',
        rating: 8.8,
        type: 'movie'
    },
    {
        title: 'Stranger Things',
        year: 2016,
        genre: 'Science Fiction',
        rating: 8.7,
        type: 'tv',
        seasons: 4
    },
    {
        title: 'The Shawshank Redemption',
        year: 1994,
        genre: 'Drama',
        rating: 9.3,
        type: 'movie'
    }
];


// Movie class
class Movie {

    constructor(title, year, genre, rating, type) {

        this.title = title;
        this.year = year;
        this.genre = genre;
        this.rating = rating;
        this.type = type;
    }

    toString() {
        return `${this.title} è un ${this.type === 'movie' ? 'film' : 'serie tv'} di genere ${this.genre}. E' stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}`;
    }
}

// TvSeries class
class TvSeries extends Movie {

    constructor(title, year, genre, rating, seasons) {

        super(title, year, genre, rating);
        this.seasons = seasons;
    }

    toString() {
        return `${super.toString()}. In totale sono state prodotte ${this.seasons} stagioni.`;
    }
}


const movieInstances = data.map(item => {

    if (item.type === 'movie') {

        return new Movie(item.title, item.year, item.genre, item.rating, item.type);
    } else {

        return new TvSeries(item.title, item.year, item.genre, item.rating, item.seasons);
    }
});


// Media voti
function averageRatingByGenre(movies, genre) {

    const filteredMovies = movies.filter(movie => movie.genre === genre);

    if (filteredMovies.length === 0) {
        return 0;
    }

    const totalRating = filteredMovies.reduce((acc, movie) => acc + movie.rating, 0);
    return totalRating / filteredMovies.length;
}

// Generi unici
function uniqueGenres(movies) {
    const uniqueGenres = [];
    movies.forEach(movie => {
        if (!uniqueGenres.includes(movie.genre)) {
            uniqueGenres.push(movie.genre);
        }
    });
    return uniqueGenres;
}

// 
function filterMoviesByGenre(movies, genre) {
    const filteredMovies = movies.filter(movie => movie.genre === genre);
    return filteredMovies.map(movie => movie.toString());
}

const dramaMovies = filterMoviesByGenre(movieInstances, 'Drama');



console.log('Film di genere Drama:', dramaMovies);
console.log(movieInstances.map(movie => movie.toString()));
console.log('Media dei voti dei film di genere Drama:', averageRatingByGenre(movieInstances, 'Drama'));
console.log('Generi unici:', uniqueGenres(movieInstances));