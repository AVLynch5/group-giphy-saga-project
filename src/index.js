import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import logger from 'redux-logger';



const templateReducer = (state=0, action) => {
    console.log('here is a reducer');
    return state;
}

/*start reducer function

************************

end reducer function*/

/*start saga function

************************

end saga function*/

/*start saga function

************************

end saga function*/

// saga function to listen for actions
function* watcherSaga() {
    console.log('in watcherSaga');
    //yield takeEvery(type, function);
}

const sagaMiddleware = createSagaMiddleware();

const reduxStore = createStore(
    combineReducers({
        templateReducer
    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
