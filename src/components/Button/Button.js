import React from 'react';
import styles from './Button.module.css';

import ArrowDown from '../ArrowDown';

function Button() {
  return (
    <button className={styles.buttonwrapper}>
      <p>More</p>
      <div className={styles.circle}>
        <ArrowDown />
      </div>
    </button>
  );
}

export default Button;
