import React from 'react';

export default (props) => {
  const { handleClick, parametr, className, textContent1, textContent2 } = props;
  return (
    <button onClick={handleClick} className={className}>
      {parametr ? textContent1 : textContent2}
    </button>
  )
}