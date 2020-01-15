import React from "react";
import { Switch, Route } from "react-router-dom";
import series from "../../containers/Series";
import SingleSeries from "../../containers/SingleSeries";

const Main = props => (
  <Switch>
    <Route exact path="/" component={series} />
    <Route path="/series/:id" component={SingleSeries} />
  </Switch>
);

export default Main;
