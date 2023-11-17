import React from 'react';
import styles from './Time.module.scss';

import SunIcon from '../SunIcon';
import Button from '../Button';

function Time() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.timewrapper}>
        <div className={styles.greetingwrapper}>
          <SunIcon />
          <p>{`Good Morning, it's currently`}</p>
        </div>
        <div className={styles.timezonewrapper}>
          <p>11:37</p>
          <p>BST</p>
        </div>
        <p className={styles.location}>in London, UK</p>
      </div>
      <div className={styles.buttonwrapper}>
        <Button />
      </div>
    </div>
  );
}

export default Time;
