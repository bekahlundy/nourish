import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Home from '../containers/Home'
import About from './About'
import rootReducer from '../reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools);

const Root = () => (
  <Provider store={store}>
    <Router>
      <div>
        <nav>
          <Link to='/'>Home</Link> <br/>
          <Link to='/about'>About</Link>
        </nav>

        <div>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </div>
      </div>
    </Router>
  </Provider>
)

export default Root;
