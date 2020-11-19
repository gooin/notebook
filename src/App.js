import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./containers/Home";
import Create from "./containers/Create";

function App() {
    return (
        <Router>
            <div className="App">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/create">Create</Link>
                    </li>
                    <li>
                        <Link to="/edit/1">edit 1</Link>
                    </li>
                </ul>
                <Route exact path="/" component={Home}/>
                <Route path="/create" component={Create}/>
                <Route path="/edit/:id" component={Create}/>
            </div>
        </Router>

    );
}

export default App;
