import { createStore } from 'redux';

import routeReducer from './modules/routeReducer';

const enhancer = process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const store = createStore(routeReducer, enhancer);

export default store;
