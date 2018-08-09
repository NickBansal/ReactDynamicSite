import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent'
import './App.css';

class App extends Component {
  state = {
    inputText: '',
    inputLength: 0,
  }

  changeUserName = (event) => {
    this.setState({
      inputText: event.target.value,
      inputLength: event.target.value.length,
    });
  }

  deleteInputLetter = (index) => {
    const inputText = this.state.inputText.split('') // Make a copy of the original array
    inputText.splice(index, 1); // Take out the element
    const updatedText = inputText.join('')
    const inputLength = this.state.inputLength - 1;

    this.setState({
    inputText: updatedText,
    inputLength: inputLength
    }); 

  };

  render() {

    var list = this.state.inputText.split('').map((x, index) => {
      return <CharComponent
        key={index}
        click={() => {this.deleteInputLetter(index)}}
        inputText = {x}
      />;
    });


    return (
      <div className="App">

        <h1>Hello World!</h1>

        <input type='text' 
        value={this.state.inputText} 
        onChange={this.changeUserName}/>
        
        <p>Input Length: {this.state.inputLength}</p>

        <ValidationComponent 
        textLength = {this.state.inputLength}/>

        <div>
        {list}
        </div>

      </div>
    );
  }
}

export default App;
