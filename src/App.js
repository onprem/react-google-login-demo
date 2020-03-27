import React, { useState } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import "./App.css";

function App() {
  const [profile, setProfile] = useState();

  return (
    <div className="App">
      <Nav profile={profile} setProfile={setProfile} />
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login">
          <Login profile={profile} setProfile={setProfile} />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard profile={profile} setProfile={setProfile} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
