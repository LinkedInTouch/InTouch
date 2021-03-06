import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import LogIn from './LogIn';
import ConnectionsPage from './ConnectionsPage';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { LinkedInCallback } from "react-linkedin-login-oauth2";
import Modal from "./Modal";
import useModal from "./useModal";
import CalendarComponent from './CalendarComponent';


export default function App() {
  const {isVisible, toggleModal} = useModal();

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
              <div>
                <button onClick={toggleModal}>
                  Show modal
                </button>
                <Modal isVisible={isVisible} hideModal={toggleModal} />
              </div>
            </DndProvider>
          </Route>
        
        <Route path="/calendar">
          <CalendarComponent />
        </Route> 
       
      </Switch>
    </div>
  </Router>
  );

}
