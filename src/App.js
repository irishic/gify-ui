import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AppGrid } from './App.sc'
import { Header } from './components/header'
import { GifsSearch } from './pages/gifs-search'
import { SavedGifs } from './pages/saved-gifs'
import { theme } from './theme/default';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppGrid templateRows="40px 1fr">
          <Header />
          <Switch>
            <Route exact path="/search">
              <GifsSearch />
            </Route>
            <Route exact path="/saved">
              <SavedGifs />
            </Route>
            <Route exact path="/">
              <Redirect to="/search" />
            </Route>
          </Switch>
        </AppGrid>
      </Router>
    </ThemeProvider>
  );
}

export default App;
