import React from 'react';
import MonsterCard from '../components/MonsterCard'

const Index = (props) => {

    let monsterArray = props.monsters.map(monsterObj => <MonsterCard key={monsterObj.id} monster={monsterObj} clickHandler={props.clickHandler}/>)

    let filteredArray = props.filteredMonsters.map(monsterObj => <MonsterCard key={monsterObj.id} monster={monsterObj} clickHandler={props.clickHandler}/>)

    return (
        <div className="parentDiv">
            <h2 className="Red-text-scroll">Bestiary</h2>
            <p>------------------------------------------</p>
            {props.speciesString === "" || props.speciesString === "All" ? monsterArray : filteredArray}
        </div>
    )
}

export default Index