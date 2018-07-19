import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    handleClick,
    parametr,
    className,
    textContent1,
    textContent2,
  } = props;

  return (
    <button type="submit" onClick={handleClick} className={className}>
      {parametr ? textContent1 : textContent2}
    </button>
  );
}

Button.propTypes = {
  handleClick: PropTypes.func,
  parametr: PropTypes.bool,
  className: PropTypes.string.isRequired,
  textContent1: PropTypes.string,
  textContent2: PropTypes.string.isRequired,
};

Button.defaultProps = {
  handleClick: () => { },
  parametr: false,
  textContent1: '',
};

export default Button;
