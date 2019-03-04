import React, { Component } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Rooms from './components/Rooms'
import Landing from './components/Landing'
import Users from './components/Users'
import ChatWindow from './components/ChatWindow'
import { Route, Switch } from 'react-router-dom'
import socketIOClient from 'socket.io-client'

class App extends Component {
  constructor() {
    super()
    this.state = {
      socket: socketIOClient('http://localhost:4000'),
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/rooms" component={Rooms} />
          <Route
            path="/users"
            render={() => <Users socket={this.state.socket} />}
          />
          <Route
            path="/chat/:name"
            render={() => <ChatWindow socket={this.state.socket} />}
          />
        </Switch>
      </div>
    )
  }
}

export default App
