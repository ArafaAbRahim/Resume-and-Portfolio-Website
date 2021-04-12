import { Container, Grid } from '@material-ui/core';
import React from 'react'
import './App.css';

import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';


function App() {
  return (
    <Container className="top_60">
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>          
          <Router>
            <Header />
            <div className="main-content">
              <Switch>   
                <Route path='/resume'>
                  <Resume />
                </Route>  

                <Route path='/portfolio'>
                  <Portfolio />
                </Route>

                <Route path='/contact'>
                  <Contact />
                </Route>
                
                <Route path='/'>
                  <Home />
                </Route>
              </Switch>
            </div>                                           
          </Router>          
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
