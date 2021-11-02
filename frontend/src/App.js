import Header from './components/Header/Header'
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from './components/Cart/Cart';
import ContextProvider from './context/contextProvider';
import DetailView from './components/Product/DetailView';

function App() {
  return (
    <ContextProvider>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path='/product/:id' component={DetailView}>
            </Route>
          </Switch>
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;
