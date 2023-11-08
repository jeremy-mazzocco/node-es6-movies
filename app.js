const data = [
    {
        title: 'Jaws',
        year: 1975,
        genre: 'Drama',
        rating: 8,
        type: 'movie'
    },
    {
        title: 'Breaking Bad',
        year: 2008,
        genre: 'Drama',
        rating: 9.5,
        type: 'tv',
        seasons: 5
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

        super(title, year, genre, rating, 'tv');
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


