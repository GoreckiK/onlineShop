import React from "react";
import "./App.scss";
import { Stitch } from "mongodb-stitch-browser-sdk";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./containers/MainPage";
import WrapperComponent from "./components/WrapperComponent";
import AboutComponent from "./components/About";

function App() {
    Stitch.initializeDefaultAppClient("myshop-wudnn");

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <WrapperComponent><MainPage/></WrapperComponent>
                </Route>
                <Route path='/about'>
                    <WrapperComponent><AboutComponent/></WrapperComponent>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
