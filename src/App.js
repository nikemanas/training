import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Hello = () => <h2>Hello World !</h2>

const Image = (props) => {
    let {src1, title} = props;
    src1 = src1 || 'https://www.w3schools.com/html/pic_trulli.jpg';
    title = title || 'HSBC training Demo';
    return (
      <img src={src1} title={title} width="500" height="333"/>
    )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React HSBC</h1>
        </header>
        
        <Hello />
        <p className="App-intro">
          <Image/>
          <Image src1='https://www.w3schools.com/html/img_girl.jpg' title='Snowcap'/>
          <Image src1='https://www.w3schools.com/html/img_chania.jpg'/>
        </p>
      </div>
    );
  }
}

export default App;
