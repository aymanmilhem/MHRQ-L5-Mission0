import React from 'react'
import classes from '../styles/Banner.module.css';
import SearchBar from './SearchBar';

export default function Banner() {
  return (
      <div className={classes.banner}>
          <div className={classes.bannerContentDiv}>
              <p className={classes.bannerText}>Lorem ipsum dolor sit amet</p>
              <img className={classes.bannerImage} alt='' src='/images/bannerImages/bannerImagePlaceholder.svg'></img>
          </div>
          <SearchBar/>
    </div>
  )
}
