import React from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../redux/reducers'
import reduxLogger from 'redux-logger'
import reduxThunk from 'redux-thunk'
import PageLogin from './PageLogin';

import PageEmployeesList from './PageEmployeesList';
import PageEmployeeCreate from './PageEmployeeCreate';

const store = createStore(rootReducer, applyMiddleware(reduxLogger, reduxThunk))

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
      <Route exact path="/">
          <PageLogin></PageLogin>
        </Route>
        <Route exact path="/list">
          <PageEmployeesList></PageEmployeesList>
        </Route>
        <Route exact path="/new">
          <PageEmployeeCreate></PageEmployeeCreate>
        </Route>
      </Switch>
    </Router>
  </Provider>
)

export default App