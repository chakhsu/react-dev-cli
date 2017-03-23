import React from 'react';
import stylecss from './style.css';
import styleless from './style.less';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className={styleless.h1}>你好，世界！</h1>
      </div>
    );
  }
}
