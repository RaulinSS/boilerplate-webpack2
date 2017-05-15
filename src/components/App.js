import React from 'react';
import styles from './App.css';

const App = (props) => (
  <div className={styles.app}>
    <h2>Hello, {props.name}</h2>
  </div>
);

export default App;