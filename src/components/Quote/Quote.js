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
  const [status, setStatus] = React.useState('idle');
  console.log(data);

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

  return (
    <div className={styles.wrapper}>
      <p className={styles.quote}>
        {`"${data[0].content}"`}
        <button
          className={styles.button}
          onClick={handleClick}
          disabled={status === 'loading'}
        >
          <RefreshIcon />
        </button>
      </p>
      <h5 className={styles.author}>{data[0].author}</h5>
    </div>
  );
}

export default Quote;
