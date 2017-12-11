import React from 'react';
import styleable from 'react-styleable';
import css from './frame.css';

const Frame = (props) => {
  return <div className={props.css.root}>{props.children}</div>;
};

export default styleable(css)(Frame);
