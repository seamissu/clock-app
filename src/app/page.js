'use client';

import React from 'react';
import styles from './page.module.scss';
import Image from 'next/image';

import Quote from '@/components/Quote';
import Time from '@/components/Time';
import Expand from '@/components/Expand';

export default function Home() {
  const [isExpanded, setIsExpanded] = React.useState(false);

  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }

  return (
    <main className={styles.wrapper}>
      <Image
        className={styles.background}
        src="/desktop/bg-image-daytime.jpg"
        width={1440}
        height={800}
        alt="A streak inside a forest used as background picture"
      />
      {!isExpanded && <Quote />}
      <Time isExpanded={isExpanded} toggleExpand={toggleExpand} />
      {isExpanded && <Expand />}
    </main>
  );
}
