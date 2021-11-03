import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import LogIn from "./LogIn";
import ConnectionsPage from "./ConnectionsPage";
import Calendar from "./Calendar";

export default function App() {
  return (
    <Router>
      <div>
        <nav class = 'NavBar'>
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
            <LogIn />
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
