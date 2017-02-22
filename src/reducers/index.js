import { combineReducers } from 'redux';
import goalsReducer from './goals-reducer';

const rootReducer = combineReducers({
  goalsReducer
});

export default rootReducer;
