import React from 'react';
import styles from './Time.module.scss';

import SunIcon from '../SunIcon';
import MoonIcon from '../MoonIcon';
import Button from '../Button';
import ButtonLess from '../ButtonLess';

import useTime from '@/hooks/use-time';
import useIP from '@/hooks/use-ip';

const API_KEY = process.env.NEXT_PUBLIC_IPBASE_API_KEY;
const IP_ENDPOINT = `https://api.ipbase.com/v2/info?apikey=${API_KEY}&language=en`;

const TIME_ENDPOINT = 'https://worldtimeapi.org/api/ip';

function Time({ isExpanded, toggleExpand }) {
  const { time, timezone, hour } = useTime(TIME_ENDPOINT);
  const { country, city } = useIP(IP_ENDPOINT);

  const isDaytime = hour >= 5 && hour <= 18;
  const Greetings = [
    'Good Morning',
    'Good Afternoon',
    'Good Evening',
  ];

  let index = 2;
  if (hour >= 12 && hour < 18) {
    index = 1;
  } else if (hour >= 5 && hour < 12) {
    index = 0;
  }

  const className = `${styles.wrapper} 
  ${isExpanded ? styles.isExpand : styles.notExpand}`;

  return (
    <div className={className}>
      <div className={styles.timewrapper}>
        <div className={styles.greetingwrapper}>
          {isDaytime ? <SunIcon /> : <MoonIcon />}
          <p>
            {`${Greetings[index]}`}
            <span>{`, it's currently`}</span>
          </p>
        </div>
        <div className={styles.timezonewrapper}>
          <p>{time}</p>
          <p>{timezone}</p>
        </div>
        <p className={styles.location}>
          in {city}, {country}
        </p>
      </div>
      <div className={styles.buttonwrapper}>
        {isExpanded ? (
          <ButtonLess toggleExpand={toggleExpand} />
        ) : (
          <Button toggleExpand={toggleExpand} />
        )}
      </div>
    </div>
  );
}

export default Time;
