import React, {Component} from 'react';
import './App.css';
import Data from "./Data"
import Person from "./components/Person"

export default class App extends Component{
  
  constructor(){
    super()

    this.state = {
      person: Data
    }
  }

  
  
  render(){
    const person = this.state.person.map((elem, index)=> {
     return <div>
        <Person person={elem}/>
      </div>
    })
    return(
      <div className="App">
        <div className="Header">
          <h3 className="Home">Home</h3>
        </div>
        <div className="BlackBox">
          <div className="Content">
            <div className="WhiteCard">
              {person}
            </div>
            <div className="Buttons">
              <button className="Prev">Previous</button>
              <button className="Next">Next</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
