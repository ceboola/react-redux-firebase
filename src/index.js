import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { firebaseApp } from './firebase';
import {logUser} from './actions/actionCreators';
import {MainRender} from './components';
import {Single, PhotoGrid} from './components';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { store, history} from './store';

firebaseApp.auth().onAuthStateChanged(user => {
  if(user) {
    console.log('user sign in');
    const { email } = user
    store.dispatch(logUser(email))
  } else {
    console.log('user signed out');
  }
})

const Routing = () => {
  return (
  <Provider store={store}>
    <Router history={history}>
        <Route path={`${process.env.PUBLIC_URL}/`} component={MainRender}>
          <IndexRoute component={PhotoGrid} />
          <Route path={`${process.env.PUBLIC_URL}/view/:postId`} component={Single} />
        </Route>
    </Router>
  </Provider>
  )
}



ReactDOM.render(<Routing />, document.getElementById('root'));
