import React from 'react';
import stylecss from './style.css';
import scss from './style.scss';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className={scss.h1}>你好，世界！</h1>
      </div>
    );
  }
}
