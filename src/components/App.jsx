import React, { Component } from 'react'
import TrelloList from './trello-list/TrelloList'

class App extends Component {
    
    render() {
    return (
        <div className="container"> 
            <h1>Hello world</h1>
            <TrelloList title={'Keys'} />
        </div>
      )
    }
  }

  export default App