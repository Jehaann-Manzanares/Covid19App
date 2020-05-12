import { createStore } from 'redux';
import reducer from '../reducer/Flags'

const store =createStore(reducer, {});

export default store;