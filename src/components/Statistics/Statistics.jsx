import React from 'react';
import PropTypes from 'prop-types';

export default function Statistic(props) { 
  const title = props.title;
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {props.stats.map(item => 
          <li className="item" key={item.id}>
            <span className="label" >{item.label} </span>
            <span className="percentage" >{item.percentage}%</span>
          </li>
          )}
        </ul>
      </section>
    )
  
}

Statistic.propTypes = {
  title: PropTypes.string,
}