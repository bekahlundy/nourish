import { combineReducers } from 'redux';
import goalsReducer from './goals-reducer';
// import toggleWellness from './wellness-reducer';

const rootReducer = combineReducers({
  goalsReducer
});

export default rootReducer;
