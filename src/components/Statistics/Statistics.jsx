import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistic(props) {
  const title = props.title;
  return (
    <section className={css.statistic}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat_list}>
        {props.stats.map(item => (
          <li
            className={css.list_item}
            style={{ backgroundColor: `${generateRandomColor()}` }}
            key={item.id}
          >
            <span className={css.label}> {item.label} </span>
            <span className={css.percentage}> {item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistic.propTypes = {
  title: PropTypes.string,
};

function generateRandomColor() {
  let maxVal = 0xffffff; // 16777215
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`;
}
