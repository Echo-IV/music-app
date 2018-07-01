import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MusicContainer from '../Music/containers'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/music" component={MusicContainer} />
        </Switch>
      </Router>
    )
  }
}

export default App
