import { configureStore } from '../Helpers';
import rootReducer from '../reducers';

const store = configureStore({ reducer: rootReducer });

export default store;
