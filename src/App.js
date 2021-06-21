import React, { useState } from 'react';
import logo from './logo.svg';
import { CongratulationsMessage } from "./CongratulationsMessage";
import { Greeting } from './Greeting';
import { PeopleList } from './PeopleList';
import { CounterButton } from './CounterButton';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HomePage, CounterButtonPage, PeopleListPage } from './pages';

function App() {
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [hideMessage, setHideMessage] = useState(false);

  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  return (
    <div className="App">
      <Router>
      <Link to="/counter">Go to Counter Page</Link>
      <Link to="/people-list">Go to People List Page</Link>
        <Route path="/" exact>
           <HomePage />
        </Route>
        <Route path="/counter">
           <CounterButtonPage />
        </Route>
        <Route path="/people-list">
          <PeopleListPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
