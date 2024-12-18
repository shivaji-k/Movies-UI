const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

const apiKey = 'a1b5f9ec';

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', './views'); // Set the views folder location

app.use(express.static('public')); // Serve static files like CSS/JS

// Route to search movies by title
app.get('/search', async (req, res) => {
    const searchTerm = req.query.title;
    const url = `http://www.omdbapi.com/?type=movie&apikey=${apiKey}&s=${searchTerm}`;
    try {
        const response = await axios.get(url);
        const movies = response.data.Search || [];
        
        // Render the 'index' view and pass the movies data
        res.render('index', { movies: movies, searchTerm: searchTerm });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error occurred while fetching movie data');
    }
});

// Route to fetch movie details by IMDb ID and render on a new page
app.get('/search/imdb', async (req, res) => {
    const imdbID = req.query.imdbID;
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`;
    try {
        const response = await axios.get(url);
        const movie = response.data;

        if (movie.Response === "True") {
            // Render the movieDetails.ejs page and pass movie data
            res.render('movieDetails', { movie: movie });
        } else {
            res.status(404).send('Movie not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error occurred while fetching movie details');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
