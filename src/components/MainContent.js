import React from 'react'
import classes from '../styles/MainContent.module.css';

export default function MainContent(props) {
  return (
      <div className={classes.mainContentSection}>{props.children}</div>
  )
}
