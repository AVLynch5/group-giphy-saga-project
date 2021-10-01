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

//reducer to hold list of favorite images in state
const favoritesList = (state = [], action) => {
    console.log('in favoritesList');
    switch (action.type) {
        case 'DISPLAY_FAVORITE_IMAGES':
            return action.payload;
        default:
            return state;
    }
}

//get images to be displayed on search page
function* getImages(action) {
    try {
        const imageResponse = yield axios.get(`/api/giphy/${action.payload}`);
        yield put({ type: 'SET_IMAGES', payload: imageResponse.data.data });
    } catch (error) {
        console.log(error);
    }
}//end saga function*/

//set favorite images from the search page
function* setFavoriteImage(action) {
    try {
        yield axios.post('/api/favorite/', action.payload);
        // yield put({ type: 'GET_IMAGES' });
    } catch (error) {
        console.log(error);
    }
}//end saga function*/

function* getFavoriteImages() {
    try {
        const favoritesResponse = yield axios.get(`/api/favorite`);
        yield put({ type: 'DISPLAY_FAVORITE_IMAGES', payload: favoritesResponse.data })

    } catch (error) {
        console.log(error);
    }
}

// saga function to listen for actions
function* watcherSaga() {
    console.log('in watcherSaga');
    //yield takeEvery(type, function);
    yield takeEvery('GET_IMAGES', getImages);
    yield takeEvery('FAVORITE_IMAGE', setFavoriteImage);
    yield takeEvery('GET_FAVORITES', getFavoriteImages);

}

const sagaMiddleware = createSagaMiddleware();

const reduxStore = createStore(
    combineReducers({
        templateReducer,
        favoritesList,
    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
