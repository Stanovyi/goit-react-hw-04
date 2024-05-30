import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <RotatingLines
        height="30"
        width="40"
        strokeWidth="2"
        strokeColor="#ffffff"
      />
    </div>
  );
};

export default Loader;
