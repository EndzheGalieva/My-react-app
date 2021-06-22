import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {CounterButtonPage, HomePage, NotFoundPage, PeopleListPage, ProtectedPage } from './pages';

function App() {
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [hideMessage, setHideMessage] = useState(false);

  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  return (
    <div className="App">
      <Router>
        <Link to="/counter">Go to Counter Page</Link>
        <Link to="/people-list">Go to People List Page</Link>
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
          <Route>
            <NotFoundPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
