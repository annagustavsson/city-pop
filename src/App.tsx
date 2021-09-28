import React from 'react';
import CityProvider from "./contexts/CityContext"
import StartPage from "./components/pages/StartPage/StartPage"
import SearchCountryPage from "./components/pages/SearchCountryPage/SearchCountryPage"
import SearchCityPage from "./components/pages/SearchCityPage/SearchCityPage"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <CityProvider>
      <Router>
        <Switch>
          <div>
            <Route path="/" exact render={() => <StartPage />} />
            <Route path="/search-country" exact render={() => <SearchCountryPage />} />
            <Route path="/search-city" exact render={() => <SearchCityPage />} />
          </div>
        </Switch>
      </Router>
    </CityProvider>
  );
}

export default App;
