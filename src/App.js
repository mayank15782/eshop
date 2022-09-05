import './App.css';
import Header from "./container/Header/Header";
import Products from "./container/Products/Products";
import About from "./container/About/About";
import FetchProducts from "./util/sellix";
import * as routes from './util/routes';
import {Switch, Route} from 'react-router-dom';
import Home from "./container/Home/Home";
function App() {
  return (
    <div className="App">
        <Header />
        <Switch>
            <Route path={routes.home || routes.products} exact >
              <FetchProducts />
              <Products />
            </Route>
        </Switch>
        <About />
    </div>
  );
}

export default App;
