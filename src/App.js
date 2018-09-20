import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import Form from './Form';

const Hello = () => <h2>Hello World !</h2>

const Image = (props) => {
    let {src1, title} = props;
    src1 = src1 || 'https://www.w3schools.com/html/pic_trulli.jpg';
    title = title || 'HSBC training Demo';
    return (
      <img src={src1} title={title} width="400" height="233"/>
    )
}


class App extends Component {
  state = {
    characters: []  
  };

  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((characters, i) => {
        return i !==index;
      })
    });
  }

  handleSubmit = character => {
    this.setState({
      characters: [...this.state.characters, character]
    });
  }

  render() {
    const { characters } = this.state;
    return (
     <div> 
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React HSBC</h1>
        </header>
        <Hello />
          <Image src1= '' />
          <Image src1='https://www.w3schools.com/html/img_girl.jpg' title='Snowcap'/>
          <Image src1='https://www.w3schools.com/html/img_chania.jpg'/>
        </div> 
        <div className="container">
            <Table 
                characterData={characters}
                removeCharacter={this.removeCharacter}
            />
            <Form handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default App;
