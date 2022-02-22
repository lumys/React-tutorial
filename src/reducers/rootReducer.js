import { combineReducers } from 'redux';
import tutorialReducer from './tutorial/tutorialReducer';

export default combineReducers({
  tutorial: tutorialReducer,
});
