import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer as HotReloader } from 'react-hot-loader'
import { browserHistory, Router, Route } from 'react-router-dom';
import App from './components/App';

require('./styles/base.scss');



const rootElement = document.getElementById('root')
ReactDOM.render(
  <HotReloader>
    <App />
  </HotReloader>, rootElement)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(
      <HotReloader>
        <App />
      </HotReloader>, rootElement)
  })
}
