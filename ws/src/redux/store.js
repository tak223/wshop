import { createStore, applyMiddleware ,compose} from 'redux'
import thunk from 'redux-thunk'
import{ rootreducer} from './reducer/rootreducer'
const devtools =window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(rootreducer, compose(applyMiddleware(thunk),devtools));