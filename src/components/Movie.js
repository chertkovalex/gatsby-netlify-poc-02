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

const style = {
  star: {color:'#ffd257'}
}

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
              <span className="icon has-text-star" style={style.star}>
                  <svg
                    className="svg-inline--fa fa-star fa-w-18"
                    aria-hidden="true"
                    data-prefix="fas"
                    data-icon="star"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    />
                  </svg>
              </span>{" "} <b>{vote_average}</b>
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
