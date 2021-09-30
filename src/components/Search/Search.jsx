import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchItem from './SearchItem';

function Search() {
    const dispatch = useDispatch();

    //state var - newSearch
    const [newSearch, setNewSearch] = useState('');

    //state var - most recent search
    const [recentSearch, setRecentSearch] = useState('');

    // useEffect(() => {
    //     searchGifs();
    // }, []);

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
            {/* {JSON.stringify(templateReducer.data[0].images.fixed_height.url)} */}
            {/* {JSON.stringify(templateReducer.data[0].images.fixed_height.url)} */}

            <ul>
                    {templateReducer.map((image, i) => {
                        return <SearchItem key={i} image={image}/>
                        // return(<li key={image.id}><img src={image.images.fixed_height.url}/></li>);
                    })}
                </ul>
        </>
    );
}

export default Search;