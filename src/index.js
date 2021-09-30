import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import logger from 'redux-logger';


const templateReducer = (state = [], action) => {
    console.log('here is a reducer');
    switch (action.type) {
        case 'SET_IMAGES':
            return action.payload;
        default:
            return state;
    }
};//end reducer function*/

function* getImages(action) {
    try {
        const imageResponse = yield axios.get(`/api/giphy/${action.payload}`);
        yield put({ type: 'SET_IMAGES', payload: imageResponse.data.data });
    } catch (error) {
        console.log(error);
    }
}//end saga function*/

function* createImage(action) {
    try {
        yield axios.post(`/api/giphy/${action.payload}`, { newImage: action.payload });
        yield put({ type: 'GET_IMAGES' });
    } catch (error) {
        console.log(error);
    }
}//end saga function*/

// saga function to listen for actions
function* watcherSaga() {
    console.log('in watcherSaga');
    //yield takeEvery(type, function);
    yield takeEvery('GET_IMAGES', getImages);
    yield takeEvery('CREATE_IMAGE', createImage);

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
