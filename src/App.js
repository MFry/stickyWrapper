import React from 'react';
import Appbar from 'muicss/lib/react/appbar';
import Container from 'muicss/lib/react/container';
import Content from './Content';
import logo from './logo.svg';
import './App.css';
import { StickySetter } from './stickyWrapper';

const stickyStyleSetup = { height: '200vh' };

const App = () => (
  <div>
    <Appbar>
      <Container>
        <img src={logo} className="App-logo" alt="logo" />
      </Container>
    </Appbar>
    <header className="App App-header">
      <h1 className="App-title">Welcome to Sample App</h1>
    </header>
    <Container>
      <Content />
    </Container>
    <Container style={stickyStyleSetup} />
    <StickySetter />
  </div>
);
export default App;
