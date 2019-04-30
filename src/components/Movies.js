import React from "react";
import PropTypes from "prop-types";

import Movie, { genres } from "./Movie";

const baseUrl = "https://api.themoviedb.org/3/discover/movie?with_genres=";
const apiKey = "dbdeb8c11aff490bb50b7b555bd20488";

const getMoviesByGenre = async genre => {
  console.log("getMoviesByGenre", genre);
  if (!genre) return [];

  const genreType = genres.find(
    item => item.name.toLowerCase() === genre.toLowerCase()
  );

  if (!genreType) return [];

  const moviesRes = await fetch(
    baseUrl + genreType.id + "&api_key=" + apiKey
  ).then(res => res.json());
  console.log("movieList", moviesRes);

  const { results } = moviesRes;
  if (results.length > 0) {
    return results;
  }
};

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  async getMovies() {
    const movies = await getMoviesByGenre(this.props.genre);
    this.setState({ movies });
  }

  render() {
    const { movies } = this.state;

    console.log("movies", movies);

    return (
      <div>
        {movies.map((movie, index) => (
          <Movie key={index} {...movie} />
        ))}
      </div>
    );
  }
}

Movies.propTypes = {
  genre: PropTypes.string
};

export default Movies;
