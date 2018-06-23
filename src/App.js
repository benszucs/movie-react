import React, { Component } from 'react';

import {Grid, Row, Col} from 'react-bootstrap';

import Title from './components/Title';
import Form from './components/Form';
import Movie from './components/Movie';

const API_KEY = "128a1d0ed1093ac629ba82e8345d9bfc";

class App extends Component {
  state = {
    movieIndex: 0,
    title: undefined,
    image: undefined,
    releaseDate: undefined,
    genres: undefined,
    overview: undefined,
    error: undefined
  }

  getGenres = (array) => {
    let genres = [];
    for (let i = 0; i < array.length; i++) {
      switch (array[i]) {
        case 28:
          genres.push("Action");
          break
        case 12:
          genres.push("Adventure");
          break
        case 16:
          genres.push("Animation");
          break
        case 35:
          genres.push("Comedy");
          break
        case 80:
          genres.push("Crime");
          break
        case 99:
          genres.push("Documentary");
          break
        case 18:
          genres.push("Drama");
          break
        case 10751:
          genres.push("Family");
          break
        case 14:
          genres.push("Fantasy");
          break
        case 36:
          genres.push("History");
          break
        case 27:
          genres.push("Horror");
          break
        case 10402:
          genres.push("Music");
          break
        case 9648:
          genres.push("Mystery");
          break
        case 10749:
          genres.push("Romance");
          break
        case 878:
          genres.push("Science Fiction");
          break
        case 10770:
          genres.push("TV Movie");
          break
        case 53:
          genres.push("Thriller");
          break
        case 10752:
          genres.push("War");
          break
        case 37:
          genres.push("Western");
          break
        default:
          genres.push("Unknown");
      }
    }
    this.setState({
      genres: genres,
    });
  }

  getMovieDetails = async (e) => {
    e.preventDefault();

    const year = e.target.year.value;
    const api_call = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=128a1d0ed1093ac629ba82e8345d9bfc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=${year}`);
    const data = await api_call.json();
    console.log(data);

    if (year) {
      this.setState({
        title: data.results[this.state.movieIndex].title,
        image: "http://image.tmdb.org/t/p/w500/" + data.results[this.state.movieIndex].poster_path,
        releaseDate: data.results[this.state.movieIndex].release_date,
        genres: data.results[this.state.movieIndex].genre_ids,
        overview: data.results[this.state.movieIndex].overview,
      });
    } else {
      this.setState({
        error: "Please enter a valid year",
      });
    }

    this.getGenres(this.state.genres);
  }

  resetMovieIndex = () => {
    if (this.state.movieIndex != 0) {
      this.setState({
        movieIndex: 0
      });
    }
  }

  incrementMovieIndex = () => {
    if (this.state.movieIndex < 9) {
      this.setState({
        movieIndex: this.state.movieIndex + 1
      });
    }
  }

  decrementMovieIndex = () => {
    if (this.state.movieIndex > 0) {
      this.setState({
        movieIndex: this.state.movieIndex - 1
      });
    }
  }

  render() {
    return (
      <div>
        <div className="bgPic">
          <div className="main my-5">
            <div className="container">
              <Title />
              <Form
                getMovieDetails={this.getMovieDetails}
                incrementMovieIndex={this.incrementMovieIndex}
                decrementMovieIndex={this.decrementMovieIndex}
                resetMovieIndex={this.resetMovieIndex}
                title={this.state.title}
              />
              <Movie
                movieIndex={this.state.movieIndex}
                title={this.state.title}
                image={this.state.image}
                releaseDate={this.state.releaseDate}
                genres={this.state.genres}
                overview={this.state.overview}
                error={this.state.error}
                incrementMovieIndex={this.incrementMovieIndex}
                getMovieDetails={this.getMovieDetails}
              />
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
