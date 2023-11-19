'use client';

import React from 'react';
import useSWR from 'swr';

import RefreshIcon from '../RefreshIcon';
import styles from './Quote.module.scss';

async function fetcher(endpoint) {
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  const json = await response.json();
  return json;
}

const ENDPOINT =
  'https://api.quotable.io/quotes/random?minLength=100&maxLength=140';

function Quote() {
  const { data, error } = useSWR(ENDPOINT, fetcher);
  const [status, setStatus] = React.useState('idle');

  async function handleClick(event) {
    event.preventDefault();

    setStatus('loading');

    const response = await fetch(ENDPOINT);
    const json = await response.json();

    if (typeof json[0].length === 'number') {
      setStatus('success');
    } else {
      setStatus('error');
    }
  }

  if (error) {
    <p
      className={styles.quote}
    >{`Something's wrong with the API`}</p>;
  }

  return (
    <div className={styles.wrapper}>
      <p className={styles.quote}>
        {!data ? '' : `"${data[0]?.content}"`}
        <button
          className={styles.button}
          onClick={handleClick}
          disabled={status === 'loading'}
        >
          <RefreshIcon />
        </button>
      </p>
      <h5 className={styles.author}>
        {!data ? '' : data[0]?.author}
      </h5>
    </div>
  );
}

export default Quote;
