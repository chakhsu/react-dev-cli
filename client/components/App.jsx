import React from 'react';
import style from './style.less';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className={style.h1}>你好，世界！</h1>
      </div>
    );
  }
}
