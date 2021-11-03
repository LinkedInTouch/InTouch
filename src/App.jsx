import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import LogIn from './LogIn';
import Connections from './Connections';
import Calendar from './Calendar';
import { LinkedInCallback } from "react-linkedin-login-oauth2";

export default function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
           <li>
            <Link to="/connections">Connections</Link>
          </li>
          <li>
            <Link to="/calendar">Calendar</Link>
          </li>
        </ul>
      </nav>
      <hr />

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
          <Connections />
        </Route>
        
        <Route path="/calendar">
          <Calendar />
        </Route> 
       
      </Switch>
    </div>
  </Router>
  );

}

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }
