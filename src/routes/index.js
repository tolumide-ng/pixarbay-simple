import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "../pages/Home";
import Collections from "../pages/Collections";

const AppRouter = withRouter(({ location }) => (
  <Provider store={store}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/collections" component={Collections} />
    </Switch>
  </Provider>
));

export default AppRouter;
