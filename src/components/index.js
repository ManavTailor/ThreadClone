import React from "react";
import { createRoot } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Body from "./Body";

// Use createRoot to create a root element
const root = createRoot(document.getElementById("root"));

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/users/:id" component={Body} />
      </Switch>
    </Router>
  );
};

// Use root.render to render your app
root.render(<App />);
