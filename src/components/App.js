import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Home from './Home'
import About from './About'
import Calender from './Calender'
import rootReducer from '../reducers';


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools);

const Root = () => (
  <Provider store={store}>
    <Router>
      <div>
        <h1 className='title'>Nourish</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/calender'>Calender</Link>
        </nav>

        <div>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/calender' component={Calender} />
        </div>
      </div>
    </Router>
  </Provider>
)

export default Root;
