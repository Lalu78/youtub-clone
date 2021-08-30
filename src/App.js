import React from "react";
import "./App.css";
import SearchPage from "./SearchPage";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
        
            <h1> This is Search Page</h1>
            <div className="searchPage">
            <Sidebar />
            <SearchPage />

            </div>
          </Route>
          <Route path="/">
            

            <div className="app_page">
              <Sidebar />
              <Videos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
