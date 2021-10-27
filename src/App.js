import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import AddUser from "./components/AddUser/AddUser";
import Home from "./components/Home/Home";
import Users from "./components/Users/Users";
import Header from './components/Header/Header';
import UpdateProducts from "./components/UpdateProducts/UpdateProducts";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/users">
              <Users></Users>
            </Route>
            <Route path="/users/add">
              <AddUser></AddUser>
            </Route>
            <Route path='/users/update/:id'>
              <UpdateProducts></UpdateProducts>
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
