'use client';

import React from 'react';
import useSWR from 'swr';

import RefreshIcon from '../RefreshIcon';
import styles from './Quote.module.scss';

async function fetcher(endpoint) {
  const response = await fetch(endpoint);
  const json = await response.json();

  return json;
}

const ENDPOINT =
  'https://api.quotable.io/quotes/random?minLength=100&maxLength=140';

function Quote() {
  const { data } = useSWR(ENDPOINT, fetcher);
  console.log(data);

  return (
    <div className={styles.wrapper}>
      <p className={styles.quote}>{`"${data[0].content}"`}</p>
      <h5 className={styles.author}>{data[0].author}</h5>
      <RefreshIcon />
    </div>
  );
}

export default Quote;
