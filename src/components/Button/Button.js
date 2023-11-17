'use client';

import React from 'react';
import styles from './Button.module.css';

import ArrowDown from '../ArrowDown';
import ArrowUp from '../ArrowUp';

function Button() {
  return (
    <button className={styles.buttonwrapper}>
      <p>More</p>
      <ArrowDown />
    </button>
  );
}

export default Button;
