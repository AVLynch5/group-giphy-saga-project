import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import useHistory

function FavoriteList () {
    // going to need this to send get saga req
    const dispatch = useDispatch();
    const favoritesList = useSelector(store => store.favoritesList);
    // const { favoritesList } = reduxStore;

    // on page load, show the favorites
    useEffect( () => {
        dispatch({ type: 'GET_FAVORITES'})
    }, []);  

    return (
        <div className="favorite-images">
            <h2>Favorite Gifs</h2>
            <p>display gifs here</p>
            {/* {JSON.stringify(favoritesList)} */}
            <ul>
                {favoritesList.map( (gif, index) => (
                    <li key={index}><img src={gif.source_url} /></li>
                    ))}
            </ul>
        </div>
    )
}

export default FavoriteList;