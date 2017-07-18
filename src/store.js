import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import {rootReducer} from './reducers/index.js';
import {comments} from './data';
import {posts} from './data';
import {buttons} from './data';

const defaultState = {
  posts,
  comments,
  buttons
}

export const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);
