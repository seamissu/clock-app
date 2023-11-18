import React from 'react';
import styles from './Time.module.scss';

import SunIcon from '../SunIcon';
import Button from '../Button';
import ButtonLess from '../ButtonLess';

function Time({ isExpanded, toggleExpand }) {
  const className = `${styles.wrapper} 
  ${isExpanded ? styles.isExpand : styles.notExpand}`;

  return (
    <div className={className}>
      <div className={styles.timewrapper}>
        <div className={styles.greetingwrapper}>
          <SunIcon />
          <p>{`Good Morning, it's currently`}</p>
        </div>
        <div className={styles.timezonewrapper}>
          <p>11:37</p>
          <p>BST</p>
        </div>
        <p className={styles.location}>in London, UK</p>
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
