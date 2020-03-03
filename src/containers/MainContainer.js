import React, { Component } from 'react';
import Index from './Index.js'
import Header from './Header'
import Favorites from '../components/Favorites'

class MainContainer extends Component{

    ////// MOUNTING AND STATE
    state = {
        monsters: [],
        filtered: [],
        favorites: [],
        query: "",
        species: ""
    }

    componentDidMount() {
        fetch("http://localhost:3000/monsters")
        .then(resp => resp.json())
        .then(monsters => this.setState({
            monsters: monsters, 
            filtered: monsters
        }))
    }


    ////// GRABBING AND REMOVING
    grabMonster = (monsterObj) => {
        let favoriteCopy = [...this.state.favorites, monsterObj]
        if(!this.state.favorites.includes(monsterObj)) {
        this.setState({favorites: favoriteCopy})
        }
    }

    removeMonster = (monsterObj) => {
        let newFavorite = this.state.favorites.filter(monster => monster.id !== monsterObj.id)
        this.setState({favorites: newFavorite})
    }

    ////// SEARCHING AND RENDERING
    searchHandler = (event) => {
        this.setState({query: event.target.value.toLowerCase()})
    }
    
    monsterRendering = () => {
        let newArray = this.state.monsters.filter(monsterObj => monsterObj.name.toLowerCase().includes(this.state.query))
            if(this.state.query === "") {
                return this.state.monsters
            }
       return newArray
    }


    ////// SELECT HANDLING

    //setState twice initially and it was one behind, had to use new Value for line 60 to render correctly
    selectHandler = (event) => {
        let newValue = event.target.value 
        this.setState({species: newValue})
        let newArray = this.state.monsters.filter(monsterObj => monsterObj.type === newValue)
        if(this.state.species === "All") {
            return this.state.monsters
        }
        this.setState({
            filtered: newArray
        })
    }

    ////// CREATING NEW MONSTER

    submitNewMonster = (monsterObj) => {
        fetch("http://localhost:3000/monsters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accepts: "application/json"
            },
            body: JSON.stringify(monsterObj)
        })
        .then(resp => resp.json())
        .then(monsterObj => {
            let newArr = [...this.state.monsters, monsterObj]
            // let sortedArr = newArr.map(monsterObject => monsterObject.name.sort())
            // console.log(sortedArr)
            this.setState({monsters: newArr})
        })
    }


    ////// RENDERING

    render() {
     const monsters = this.monsterRendering()
        return(
            <div>
                <img className="Demon-Two" src="https://storage.needpix.com/rsynced_images/devil-33928_1280.png" alt=""/>
                <img src="https://i.pinimg.com/originals/39/01/27/390127bb4051d747c356740d888d2aed.png" alt="" className="Main-title" />
                <img className="Demon-One" src="https://www.pngarts.com/files/3/Devil-Transparent-Background-PNG.png" alt=""/>
                <h1 className="Red-text">~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h1>
                <img className="Dragon" src="https://storage.needpix.com/rsynced_images/dragon-2375817_1280.png" alt=""/>
                <div className="Index-column">
                    <Index monsters={monsters} clickHandler={this.grabMonster} filteredMonsters={this.state.filtered} speciesString={this.state.species}/>
                </div>
                <div className="Favorites-column">
                    <Favorites favorites={this.state.favorites} clickHandler={this.removeMonster}/>
                </div>
                <div className="Search-column">
                    <img className="small-Img" src="https://www.jing.fm/clipimg/full/222-2226264_transparent-red-20-sided-dice-20-sided-dice.png" alt=""/>
                    <Header searchHandler={this.searchHandler} submitMonster={this.submitNewMonster} selectSpecies={this.selectSpecies} selectHandler={this.selectHandler} monsterLength={this.state.monsters.length}/>
                </div>
                <img className="Castle" src="https://www.pngkey.com/png/full/127-1273242_report-abuse-castle-silhouette-no-background.png" alt=""/>

            </div>
        )
    }

}

export default MainContainer