import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import TopArticles from "./components/pages/TopArticles";
import NewArticles from "./components/pages/NewArticles";
import Header from "./components/layouts/Header";
import { ArticlesProvider } from "./store/articles.context";

/**
 * Main App Component
 * @params props {}
 * @description Main App Component
 * @function Function Component
 */
export default function App() {
  return (
    <ArticlesProvider>
      <div className="App container">
        <Router>
          <Header />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <NewArticles />
              </Route>
              <Route exact path="/top">
                <TopArticles />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </ArticlesProvider>
  );
}
