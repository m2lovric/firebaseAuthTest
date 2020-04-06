import React from 'react';
import './App.scss';

function App() {
  return (
    <header>
      <nav>
        <h1><a href="/">Issue Tracker</a></h1>
        <ul>
          <li><a href="/account">Account</a></li>
          <li><a href="/logout">Logout</a></li>
          <li><a href="/create">New Issue</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/signup">Sign up</a></li>
        </ul>
      </nav>      
    </header>
  );
}

export default App;
