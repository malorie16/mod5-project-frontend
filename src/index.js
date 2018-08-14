import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux'
import { Provider} from 'react-redux'
import reducer from './reducers/reducer.js'
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk'


const store = createStore(reducer, applyMiddleware(thunk))
//takes in reducers


ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
