import React, {useState} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {
  CounterButtonPage,
  HomePage,
  NotFoundPage,
  PeopleListPage,
  ProtectedPage,
  ControlledFormPage,
  UncontrolledFormPage,
  UserProfilePage,
} from './pages';
import { UserDataLoader } from "./UserDataLoader";
import { NavBar } from "./NavBar";
import { FormsNavBar } from './FormsNavBar';
import './App.css';

function App() {
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [hideMessage, setHideMessage] = useState(false);

  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="App-header">
          <Switch>
            <Route path="/" exact>
              <HomePage/>
            </Route>
            <Route path="/counter">
              <CounterButtonPage/>
            </Route>
            <Route path="/people-list">
              <PeopleListPage/>
            </Route>
            <Route path="/protected">
              <ProtectedPage />
            </Route>
            <Route path="/user">
              <UserDataLoader>
                <UserProfilePage />
              </UserDataLoader>
            </Route>
            <Route path="/forms">
              <Router>
                <FormsNavBar />
                <Route path="/forms/controlled">
                   <ControlledFormPage />
                </Route>
                <Route path="/forms/uncontrolled">
                  <UncontrolledFormPage />
                </Route>
              </Router>
            </Route>
             <Route>
               <NotFoundPage/>
             </Route>
          </Switch>
        </div>

      </Router>
    </div>
  );
}

export default App;
