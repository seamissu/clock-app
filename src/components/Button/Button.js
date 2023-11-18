import React from 'react';
import styles from './Button.module.scss';

import ArrowDown from '../ArrowDown';

function Button({ toggleExpand }) {
  return (
    <button onClick={toggleExpand} className={styles.buttonwrapper}>
      <p>More</p>
      <div className={styles.circle}>
        <ArrowDown />
      </div>
    </button>
  );
}

export default Button;
