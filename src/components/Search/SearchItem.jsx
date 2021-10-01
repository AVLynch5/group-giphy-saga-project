import './Search.css';
import { useDispatch } from 'react-redux';

function SearchItem(props) {
    const dispatch = useDispatch();
    const handleFavorite = () => {
        const favoriteData = {
            source_url: props.image.images.fixed_height.url,
            search_word: props.recentSearch
        }
        dispatch({ type: 'FAVORITE_IMAGE', payload: favoriteData })
        console.log(favoriteData);
    }

    return (
        <div className='gif-box'>
            <img className='gif-image' src={props.image.images.fixed_height.url} />
            <br />
            <button onClick={handleFavorite}>Favorite</button>
        </div>
    )
};

export default SearchItem;