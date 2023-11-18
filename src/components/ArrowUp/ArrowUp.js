import React from 'react';
import styles from './ArrowUp.module.scss';

function ArrowUp() {
  return (
    <>
      <svg
        className={styles.large}
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
      >
        <g fill="none" fillRule="evenodd">
          <circle cx="20" cy="20" r="20" fill="#303030"></circle>
          <path
            stroke="#FFF"
            strokeWidth="2"
            d="M14 23l6-6 6 6"
          ></path>
        </g>
      </svg>
      <svg
        className={styles.small}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="none"
        viewBox="0 0 32 32"
      >
        <circle cx="16" cy="16" r="16" fill="#303030"></circle>
        <path
          stroke="#fff"
          strokeWidth="2"
          d="M11.2 18.4l4.8-4.8 4.8 4.8"
        ></path>
      </svg>
    </>
  );
}

export default ArrowUp;
