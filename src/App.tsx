import React from 'react';
import CountrySearchProvider from "./contexts/CountrySearchContext"
import CitySearchProvider, { CitySearchContext } from "./contexts/CitySearchContext"
import StartPage from "./components/pages/StartPage/StartPage"
import Search from "./components/common/Search/Search"
import JumboTron from "./components/common/JumboTron/JumboTron"
import CitySearchRender from "./components/common/CitySearchRender/CitySearchRender"
import CountrySearchRender from "./components/common/CountrySearchRender/CountrySearchRender"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <CountrySearchProvider>
      <CitySearchProvider>
        <Router>
          <Switch>
            <div>
              <JumboTron />
              <Route path="/" exact render={() => <StartPage />} />
              <Route path="/city/:id" exact render={() => <CitySearchRender />} />
              <Route path="/country/:id" exact render={() => <CountrySearchRender />} />
              <Route path="/search/:id" exact render={() => <Search />} />
            </div>
          </Switch>
        </Router>
      </CitySearchProvider>
    </CountrySearchProvider>
  );
}

export default App;
