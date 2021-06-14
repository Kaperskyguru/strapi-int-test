import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './components/views/Home.js'
import Planet from './components/views/CreatePlanet'
import Character from './components/views/CreateCharacter'

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/characters/create">
            <Character />
          </Route>

          <Route path="/planets/create">
            <Planet />
          </Route>

        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
