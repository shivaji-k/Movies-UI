async function showMovieDetails(imdbID) {
    const url = `http://www.omdbapi.com/?apikey=a1b5f9ec&i=${imdbID}`;
    const response = await fetch(url);
    const movieDetails = await response.json();

    const movieDetail = document.getElementById('movieDetail');
    movieDetail.innerHTML = '';

    if (movieDetails.Response === 'True') {
        const img = document.createElement('img');
        img.src = movieDetails.Poster !== "N/A" ? movieDetails.Poster : '';
        img.alt = movieDetails.Title;

        const title = document.createElement('h2');
        title.textContent = movieDetails.Title;

        const year = document.createElement('p');
        year.textContent = `Year: ${movieDetails.Year}`;

        const director = document.createElement('p');
        director.textContent = `Director: ${movieDetails.Director}`;

        const plot = document.createElement('p');
        plot.textContent = `Plot: ${movieDetails.Plot}`;

        movieDetail.appendChild(img);
        movieDetail.appendChild(title);
        movieDetail.appendChild(year);
        movieDetail.appendChild(director);
        movieDetail.appendChild(plot);
    } else {
        
        movieDetail.innerHTML = '<p>Movie details not found</p>';
    }
    async function showMovieDetails(movie) {
        const url = `http://www.omdbapi.com/?apikey=a1b5f9ec&i=${movie.imdbID}`;
        const response = await fetch(url);
        const movieDetails = await response.json();
    
        const movieDetail = document.getElementById('movieDetail');
        movieDetail.innerHTML = '';
    
        const img = document.createElement('img');
        img.src = movieDetails.Poster !== "N/A" ? movieDetails.Poster : '';
        img.alt = movieDetails.Title;
    
        const title = document.createElement('h2');
        title.textContent = movieDetails.Title;
    
        const year = document.createElement('p');
        year.textContent = `Year: ${movieDetails.Year}`;
    
        const director = document.createElement('p');
        director.textContent = `Director: ${movieDetails.Director}`;
    
        const plot = document.createElement('p');
        plot.textContent = `Plot: ${movieDetails.Plot}`;
    
        movieDetail.appendChild(img);
        movieDetail.appendChild(title);
        movieDetail.appendChild(year);
        movieDetail.appendChild(director);
        movieDetail.appendChild(plot);
    }
    
}
