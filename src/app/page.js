'use client';

import React from 'react';
import styles from './page.module.scss';
import Image from 'next/image';

import Quote from '@/components/Quote';
import Time from '@/components/Time';
import Expand from '@/components/Expand';

import useTime from '@/hooks/use-time';

const TIME_ENDPOINT = 'http://worldtimeapi.org/api/ip';

export default function Home() {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const { hour } = useTime(TIME_ENDPOINT);

  const isDaytime = hour >= 5 && hour <= 18;

  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }

  const className = `${styles.wrapper} ${
    isExpanded ? styles.expandmobile : styles.notexpandmobile
  } ${isExpanded ? styles.expandtablet : styles.notexpandtablet}
  `;

  return (
    <main className={className}>
      <Image
        className={styles.backgrounddesktop}
        src={
          isDaytime
            ? `/desktop/bg-image-daytime.jpg`
            : `/desktop/bg-image-nighttime.jpg`
        }
        width={1440}
        height={800}
        alt="A streak inside a forest used as background picture"
      />
      <Image
        className={styles.backgroundtablet}
        src={
          isDaytime
            ? `/tablet/bg-image-daytime.jpg`
            : `/tablet/bg-image-nighttime.jpg`
        }
        width={768}
        height={1024}
        alt="A streak inside a forest used as background picture"
      />
      <Image
        className={styles.backgroundmobile}
        src={
          isDaytime
            ? `/mobile/bg-image-daytime.jpg`
            : `/mobile/bg-image-nighttime.jpg`
        }
        width={375}
        height={667}
        alt="A streak inside a forest used as background picture"
      />
      {!isExpanded && <Quote />}
      <Time isExpanded={isExpanded} toggleExpand={toggleExpand} />
      {isExpanded && <Expand />}
    </main>
  );
}
