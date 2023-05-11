import React from 'react';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
import style from './myPercentage.module.css';

function PercentageChange() {
  const random = Math.floor(Math.random() * 100);
  return (
    <div className={style.mainBody}>
      <div className={style.body}>
        <CircularProgressBar
          number={false}
          percent={random}
          strokeDasharray=""
          unit=""
          fontColor="#379cf6"
          speed={150}
          size={100}
        />

        <div className={style.com}>
          <span className={style.randPer}>
            {random}
            %
          </span>
          <span className={style.isCom}>
            Completed
          </span>
        </div>
      </div>

      <div className={style.greyDiv} />

      <div className={style.lastRow}>
        <span className={style.spanCon}>
          <h2>CURRENT CHAPTER</h2>
          <h3>chapter</h3>
        </span>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

export default PercentageChange;
