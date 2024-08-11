import React, { useState } from 'react';
import styles from './style.module.css';

const FlashCard = ({data}) => {
  const [clicked, setClicked] = useState(false);

  console.log(clicked);

  return (
    <div className={styles.flipCard} onClick={() => setClicked(!clicked)}>
      <div className={`${styles.flipCardInner} ${clicked ? styles.rotate : ''}`}>
        <div className={styles.flipCardFront}>
          <p>
            {data.question}
          </p>
        </div>
        <div className={styles.flipCardBack}>
          <p>
            {data.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
