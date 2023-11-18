'use client';

import React from 'react';
import styles from './Expand.module.scss';

import useIP from '@/hooks/use-ip';

const API_KEY = process.env.NEXT_PUBLIC_IPBASE_API_KEY;
const ENDPOINT = `https://api.ipbase.com/v2/info?apikey=${API_KEY}&language=en`;

function Expand() {
  // const { continent, country, city } = useIP(ENDPOINT);

  return (
    <div className={styles.wrapper}>
      <div className={styles.whitedrop}></div>
      <div className={styles.firstwrapper}>
        <div className={styles.citywrapper}>
          <h6>Current timezone</h6>
          {/* <h2>{`${continent}/${city}`}</h2> */}
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
