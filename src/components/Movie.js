import React, { Component } from 'react';
import PropTypes from 'prop-types';


const Movie = props => {
  return(
    <div>
      { props.error &&
        <p className="text-center">{props.error}</p>
      }
      <div class="row justify-content-center align-self-center">
      { props.image &&
        <div class="col">
          <div className="text-center">
            <img src={props.image} alt="Movie Poster" className="image"/>
          </div>
        </div>
      }


      { props.title && props.releaseDate && props.genres && props.overview &&
        <div class="col">
          <div className="py-5">
            <p className="title movieTitle">{props.movieIndex + 1}. {props.title}</p>
            <p>{props.releaseDate}</p>
            <p>Genres: {
                props.genres.map(function(item, index) {
                  return <span>{ (index ? ', ' : '') + item }</span>;
                })
              }
            </p>
            <p>{props.overview}</p>
          </div>
        </div>
      }
      </div>
    </div>

  );
};

Movie.propTypes = {
  movieIndex: PropTypes.number.isRequired,
  title: PropTypes.string,
  image: PropTypes.string,
  releaseDate: PropTypes.string,
  genres: PropTypes.array,
  overview: PropTypes.string,
  error: PropTypes.string,
};

export default Movie;
