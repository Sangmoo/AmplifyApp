import logo from './logo.svg';
import './App.css';
import React from 'react'

import { withAuthenticator } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello Sangmoo Amplify World</h1>
      </header>
    </div>
  );
}

export default withAuthenticator(App, { includeGreetings: true });
