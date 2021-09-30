import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Search() {
    const dispatch = useDispatch();

    //state var - newSearch
    const [newSearch, setNewSearch] = useState('');

    //state var - most recent search
    const [recentSearch, setRecentSearch] = useState('');

    //function searchGifs - dispatch GET API
    const searchGifs = () => {
        dispatch({ type: 'GET_IMAGES', payload: newSearch });
        setRecentSearch(newSearch);
        setNewSearch('');
    }

    //access redux store - templateReducer - array of gif objects
    const templateReducer = useSelector(store => store.templateReducer);

    return (
        <>
            <h3>Search for GIFs by keyword:</h3>
            <p>Most recent search: <span>{recentSearch}</span></p>
            <form onSubmit={searchGifs}>
                <input required type="text" placeholder='Keyword' value={newSearch} onChange={(event) => setNewSearch(event.target.value)} />
                <button type="submit">Search</button>
            </form>
            <p>Results</p>
            {/* <ul>
                    {templateReducer.map((image) => {
                        return(<li>Bananas</li>);
                    })}
                </ul> */}


        </>
    );
}

export default Search;