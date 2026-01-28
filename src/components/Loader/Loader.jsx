import React from 'react';
import { FadeLoader } from 'react-spinners';
import classes from './Loader.module.css';

function Loader() {
  return (
    <div className={classes.loader}>
      <FadeLoader color="#febd69" />
    </div>
  );
}

export default Loader;