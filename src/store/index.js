import { createStore } from 'redux';
import rootReduce from '../reducers';

const store = createStore(rootReduce);

export default store;
