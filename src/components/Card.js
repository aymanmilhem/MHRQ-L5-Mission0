import React from 'react'
import classes from '../styles/Card.module.css';
export default function Card(props) {
  return (
      <div className={classes.card}>
          <img alt={props.title} src={props.picture}></img>
          <h2>{props.title}</h2>
          <p>{ props.description }</p>
    </div>
  )
}
