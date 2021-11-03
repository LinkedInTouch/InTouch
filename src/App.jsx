import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import LogIn from './LogIn';
import ConnectionsPage from './ConnectionsPage';
import Calendar from './Calendar';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { LinkedInCallback } from "react-linkedin-login-oauth2";

export default function App() {
  return (
    <Router>
    <div>
      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>

        <Route exact path="/">
          <LogIn></LogIn>
        </Route>

        <Route exact path="/linkedin" component={LinkedInCallback}>

        </Route>

         <Route path="/connections">
            <DndProvider backend={HTML5Backend}>
              <ConnectionsPage />
            </DndProvider>
          </Route>
        
        <Route path="/calendar">
          <Calendar />
        </Route> 
       
      </Switch>
    </div>
  </Router>
  );

}
