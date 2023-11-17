import React from 'react';
import styles from './ButtonLess.module.scss';
import ArrowUp from '../ArrowUp';

function ButtonLess() {
  return (
    <button className={styles.buttonwrapper}>
      <p>Less</p>
      <ArrowUp />
    </button>
  );
}

export default ButtonLess;
