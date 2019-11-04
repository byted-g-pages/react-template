import PropTypes from 'prop-types';
import React from 'react';
import './index.scss';


function Example({ name }) {
  return (
    <div className="x-component-example">
      Example:
      {name}
    </div>
  );
}

Example.propTypes = {
  name: PropTypes.string,
};
Example.defaultProps = {
  name: null,
};


export default Example;
