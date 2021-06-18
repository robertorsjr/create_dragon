import { combineReducers } from 'redux';
import loginState from './login';
import createDragonState from './create';
import listDragonsState from './list';
import updateDragonState from './update';
import deleteDragonState from './delete';

export default combineReducers({
  loginState,
  createDragonState,
  listDragonsState,
  updateDragonState,
  deleteDragonState,
});
