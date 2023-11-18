import React from 'react';
import styles from './Expand.module.scss';

function Expand() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.whitedrop}></div>
      <div className={styles.firstwrapper}>
        <div className={styles.citywrapper}>
          <h6>Current timezone</h6>
          <h2>Europe/London</h2>
        </div>
        <div className={styles.dayoftheyear}>
          <h6>Day of the year</h6>
          <h2>295</h2>
        </div>
      </div>
      <div className={styles.secondwrapper}>
        <div className={styles.dayoftheweek}>
          <h6>Day of the week</h6>
          <h2>5</h2>
        </div>
        <div className={styles.weeknumber}>
          <h6>Week number</h6>
          <h2>42</h2>
        </div>
      </div>
    </div>
  );
}

export default Expand;
