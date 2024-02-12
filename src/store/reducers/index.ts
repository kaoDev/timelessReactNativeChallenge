import {combineReducers} from '@reduxjs/toolkit';

import {dropsReducer} from 'src/store/slices/dropsSlice';

const rootReducer = combineReducers({
  drops: dropsReducer,
});

export default rootReducer;
