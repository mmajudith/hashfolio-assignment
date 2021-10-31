import { combineReducers } from "redux";

import records from './recordsReducer';

const rootReducers = combineReducers({ records });

export default rootReducers;
