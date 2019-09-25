import { createStore } from 'redux';

import routeReducer from './modules/routeReducer';

const store = createStore(routeReducer);

export default store;
