import React from 'react'
import classes from '../styles/TopNavBar.module.css'
import SearchBar from './SearchBar'

export default function TopNavBar() {
  return (
    <div className={classes.navBar}>
      <div className={classes.navBarLeft}>
        <button className={classes.navBarLeftButton}></button>My Company
      </div>
      <div className={classes.navBarRight}>
        <button className={classes.navBarMenuButton}>Menu 1</button>
        <button className={classes.navBarMenuButton}>Menu 2</button>
        <button className={classes.navBarMenuButton}>Menu 3</button>
        <button className={classes.navBarLoginButton}>Login</button>
      </div>
      <div className={classes.navBarMenu__burger}>
        <div className={classes.navBarMenuButton__burger}></div>
      </div>
    </div>
  );
}
