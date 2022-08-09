import React from 'react'
import classes from '../styles/SearchBar.module.css';

export default function SearchBar() {
  return (
    <div className={classes.searchBar}>
      <input type="text" className={classes.searchBarInput}></input>
      <button className={classes.searchBarButton} type="submit">
        SEARCH
      </button>
    </div>
  );
}
