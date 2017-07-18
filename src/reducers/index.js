import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {posts} from './posts';
import {comments} from './comments';
import {login} from './login'
import {setphoto} from './setphoto'
import {buttons} from './buttons'

export const rootReducer = combineReducers({posts, comments, login, setphoto, buttons, routing: routerReducer})
