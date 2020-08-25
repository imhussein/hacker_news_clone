import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import TopArticles from "./components/pages/TopArticles";
import NewArticles from "./components/pages/NewArticles";
import Header from "./components/layouts/Header";
import { ArticlesProvider } from "./store/articles.context";

/**
 * Main App Component
 * I have used for the app (React Hooks And Context API For state management and typescript just to setup contract between objects in the app and for styling i have added custom ui using scss from scratch)
 * Folder Structure
 * @k8s : That folder and the files inside i just used to deploy the app on a kubernetes cluster and the two docker files in root director is to build container using that client app image
 * @types
 *    - Actions:  For All Actions Types used for state management
 *    - Components: For Component Prop Types
 *    - Context: For Context type declarations
 *    - Store: For State declarations
 * @assets
 *    - images: contain images used in the app
 *    - @scss : Contain All Css declaration for the app (i used the 7 - 1 scss pattern)
 *        - abstract
 *        - base
 *        - components
 *        - layouts
 *        - pages
 *        - themes
 *        - vendors
 * @components : Contain All App Components
 *    - layouts
 *    - pages
 * @store : App State Management
 */

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
