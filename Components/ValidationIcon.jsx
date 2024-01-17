import React from 'react';

const ValidationIcon = ({ isError }) => {
  return (
    <img
      src={isError ? '/assets/icons/mark_correct.svg' : '/assets/icons/mark_wrong.svg'}
      className="w-4 h-4"
      alt=""
    />
  );
};

export default ValidationIcon;
