'use client';

import React from 'react';
import styles from './Expand.module.scss';

import useIP from '@/hooks/use-ip';
import useTime from '@/hooks/use-time';

const API_KEY = process.env.NEXT_PUBLIC_IPBASE_API_KEY;
const IP_ENDPOINT = `https://api.ipbase.com/v2/info?apikey=${API_KEY}&language=en`;
const TIME_ENDPOINT = 'http://worldtimeapi.org/api/ip';

function Expand() {
  const { continent, city } = useIP(IP_ENDPOINT);

  const { dayofyear, dayofweek, weeknumber, hour } =
    useTime(TIME_ENDPOINT);

  const isDaytime = hour >= 5 && hour <= 18;

  const wrapperClassname = `${styles.wrapper} ${
    isDaytime ? styles.daytimefontcolor : styles.nighttimefontcolor
  }`;

  const backdropClassname = `${styles.backdrop} ${
    isDaytime ? styles.daytimebgcolor : styles.nighttimebgcolor
  }`;

  return (
    <div className={wrapperClassname}>
      <div className={backdropClassname}></div>
      <div className={styles.firstwrapper}>
        <div className={styles.citywrapper}>
          <h6>Current timezone</h6>
          <h2>{`${continent}/${city}`}</h2>
        </div>
        <div className={styles.dayoftheyear}>
          <h6>Day of the year</h6>
          <h2>{dayofyear}</h2>
        </div>
      </div>
      <div className={styles.secondwrapper}>
        <div className={styles.dayoftheweek}>
          <h6>Day of the week</h6>
          <h2>{dayofweek}</h2>
        </div>
        <div className={styles.weeknumber}>
          <h6>Week number</h6>
          <h2>{weeknumber}</h2>
        </div>
      </div>
    </div>
  );
}

export default Expand;
