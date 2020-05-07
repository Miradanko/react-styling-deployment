import React from 'react';
import './App.css';
import StyledComponent from './components/StyledComponents/StyledComponent';
import CssModeles from './components/CssModules/CssModules';
import Button from '@material-ui/core/Button';
import Favorite from '@material-ui/icons/Favorite';
import SignUp from './components/SignUp/SignUp';
import Header from './components/Header/Header';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <div className="App">
      <Header />
      <StyledComponent />
      <StyledComponent primary />
      <CssModeles />
      <Button variant="contained" color="primary">
        Material UI Button
    </Button>
    <Favorite />
    <CssBaseline />
    <SignUp />
    </div>
  );
}

export default App;
