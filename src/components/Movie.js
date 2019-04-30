import React from "react";

const imageBaseUrl = "https://image.tmdb.org/t/p/w370_and_h556_bestv2";
export const genres = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" }
];

const findGenreNameById = id => genres.find(item => item.id === id).name;

const Movie = ({
  title,
  overview,
  poster_path,
  release_date,
  vote_average,
  genre_ids
}) => (
  <>
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={imageBaseUrl + poster_path} alt="" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <strong>{title}</strong>
            <div>
              <b>Genres: </b>
              {genre_ids.map(id => (
                <small key={id}> {findGenreNameById(id)} </small>
              ))}
            </div>
            <div>
              <b>Release: </b>
              <time dateTime="2016-1-1">{release_date}</time>
            </div>
            <br />
            {overview}
          </div>
        </div>
      </article>
    </div>
  </>
);

export default Movie;
