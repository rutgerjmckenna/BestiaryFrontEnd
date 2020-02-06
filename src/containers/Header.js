import React from 'react';
import SearchBar from '../components/SearchBar'

const Header = (props) => {

    return (
        <SearchBar searchHandler={props.searchHandler} submitMonster={props.submitMonster} selectSpecies={props.selectSpecies} selectHandler={props.selectHandler} monsterLength={props.monsterLength}/>
    )
}

export default Header;