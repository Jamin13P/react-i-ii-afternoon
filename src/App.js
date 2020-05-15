import React, {Component} from 'react';
import './App.css';
import Data from "./Data"
import Person from "./components/Person"

export default class App extends Component{
  
  constructor(){
    super()

    this.state = {
      person: Data,
      index: 0
    }
    this.previousButton = this.previousButton.bind(this)
    this.nextButton = this.nextButton.bind(this)
  }

  previousButton(){
    if(this.state.index === 0)
    return

    this.setState((elem) => ({index: elem.index - 1}))
  }

  nextButton(){
    if(this.state.index === this.state.person.length - 1)
    return

    this.setState((elem) => ({index: elem.index + 1}))
  }
  
  render(){
    return(
      <div className="App">
        <div className="Header">
          <h3 className="Home">Home</h3>
        </div>
        <div className="BlackBox">
          <div className="Content">
            <div className="WhiteCard">
              <Person person={this.state.person[this.state.index]}/>
            </div>
            <div className="Buttons">
              <button className="Prev" onClick={this.previousButton}>Previous</button>
              <button className="Next" onClick={this.nextButton}>Next</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
