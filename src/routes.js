import React from "react";
import { Route, Switch} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home.js";
import Shop from "./pages/Shop.js";
import RouteWithLayout from "./layout/RouteWithLayout";
import AppBar from "./layout/AppBar";

export default(
    <Router>
        <Switch>
        {/* <RouteWithLayout exact path="/" layout={AppBar} component={Home} />
        <RouteWithLayout
            path="/home"
            layout={AppBar}
            component={Home}
        /> */}
        <Route
            path="/home"
            component={Home}
        />
        <Route
            path="/shop"
            component={Shop}
        />

        </Switch>
    </Router>

);