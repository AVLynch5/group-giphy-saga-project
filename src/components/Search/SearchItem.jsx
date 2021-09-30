import './Search.css';

function SearchItem(props) {
    const handleFavorite = () => {
        console.log(props.image.id);
    }

    return (
        <div className='gif-box'>
                <img className = 'gif-image' src={props.image.images.fixed_height.url} />
                <br />
                <button onClick={handleFavorite}>Favorite</button>
        </div>
    )
};

export default SearchItem;