import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import AddProducts from "./components/AddProducts/AddProducts";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Header from './components/Header/Header';
import UpdateProducts from "./components/UpdateProducts/UpdateProducts";
import Dashboard from "./components/Dashboard/Dashboard";

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
            <Route exact path="/products">
              <Products></Products>
            </Route>
            <Route path="/products/add">
              <AddProducts></AddProducts>
            </Route>
            <Route path='/products/update/:id'>
              <UpdateProducts></UpdateProducts>
            </Route>
            <Route exact path='/dashboard'>
              <Dashboard></Dashboard>
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
