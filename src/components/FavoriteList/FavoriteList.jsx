import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function FavoriteList () {
    // going to need this to send get saga req
    const dispatch = useDispatch();
    const favoritesList = useState(store => store.favoritesList);

    // on page load, show the favorites
    useEffect( () => {
        fetchFavorites()
    }, []);  

    const fetchFavorites = () => {
        console.log('fetching favorites');
        dispatch({ type: 'GET_FAVORITES'})
    }

    return (
        <div className="favorite-images">
            <h2>Favorite Gifs</h2>
            <p>display gifs here</p>
            <p>{JSON.stringify(favoritesList)}</p>
            <ul>
                {favoritesList.map( (gif, index) => (
                    <li key={index}><img src={gif.source_url} /></li>
                    ))}
            </ul>
        </div>
    )
}

export default FavoriteList;