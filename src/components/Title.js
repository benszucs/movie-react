import React from 'react';
import PropTypes from 'prop-types';

const Title = props => {
  return(
    <div>
      <h1 className="text-center title">Movie App</h1>
      <h3 className="text-center py-2 title">Find the top 10 movies by year: TMDB API & React</h3>
    </div>
  );
};

export default Title;
