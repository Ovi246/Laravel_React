import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Add from "./components/Add";
import Home from "./components/Home";
import Edit from "./components/Edit";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import store from './redux/store'
import store from "./redux/store";
import Delete from "./components/Delete";
import Typo from "./components/Typo";

const App = () => {
    return (
        <Router basename="/react">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
                <Route path="/add">
                    <Add />
                </Route>
                <Route path="/edit/:id">
                    <Edit />
                </Route>
                <Route path="/delete/:id">
                    <Delete />
                </Route>
                <Route path="/typo">
                    <Typo />
                </Route>
            </Switch>
        </Router>
    );
};

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);
