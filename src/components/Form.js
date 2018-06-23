import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Form = props => {
  return(
    <div className="App">
      <form onSubmit={props.getMovieDetails} className="py-4 form-inline justify-content-center">
        <input type="text" name="year" placeholder="Year"/>
        <input className="button" type="submit" value="Search" onClick={props.resetMovieIndex}/>
        { props.title &&
          <div>
            <input className="button" type="submit" value="Previous" onClick={props.decrementMovieIndex}/>
            <input className="button" type="submit" value="Next" onClick={props.incrementMovieIndex}/>
          </div>
        }

      </form>
    </div>
  );
};

Form.propTypes = {
  getMovieDetails: PropTypes.func,
  incrementMovieIndex: PropTypes.func,
  decrementMovieIndex: PropTypes.func,
  resetMovieIndex: PropTypes.func,
  title: PropTypes.string
};

export default Form;
