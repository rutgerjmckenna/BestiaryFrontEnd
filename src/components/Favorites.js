import React from 'react';
import FavoriteCard from '../components/FavoriteCard'

const Favorites = (props) => {
    let favoritesArray = props.favorites.map(monsterObj => <FavoriteCard key={monsterObj.id} monster={monsterObj} clickHandler={props.clickHandler}/>)

    return(
        <div className="parentDiv">
            <h2 className="Red-text">Favorites</h2>
            <p>------------------------------------------</p>
            {favoritesArray}
        </div>
    )
}

export default Favorites;