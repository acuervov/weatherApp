import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./Reducers.js"
import thunk from 'redux-thunk'

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const store = createStore(
    reducer,
    composeEnhacer(applyMiddleware(thunk))
  );
  
  export default store;
 