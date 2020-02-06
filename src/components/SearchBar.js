import React from 'react';


class SearchBar extends React.Component {

    state = {
        id: 0,
        name: "",
        type: "",
        url: ""
    }

    handleNameSubmit = (event) => {
        this.setState({name: event.target.value})
    }

    handleSpeciesSubmit = (event) => {
        if(event.target.value !== "Select") {
        this.setState({type: event.target.value})
        } else {
            alert("Pick a species!")
        }
    }

    handleUrlSubmit = (event) => {
        this.setState({url: event.target.value})
    }

    preventDefaulter = (event) => {
        event.preventDefault()
        this.setState({id: this.props.monsterLength + 1})
        this.props.submitMonster(this.state)
    }

    render(){
        return(
        <div>
            <h2 className="Red-text">Search Bestiary</h2>
            <form>
                <input className="Input" type="Text" placeholder="Find Monster" onChange={this.props.searchHandler}/>
            </form>
            <p>--------------------------</p>

            <h2 className="Red-text">Filter by Species</h2>
            <select className="Drop-down" onChange={(event) => this.props.selectHandler(event)}>
                <option value="All">All Species</option>
                <option value="Aberration">Aberration</option>
                <option value="Elemental">Elemental</option>
                <option value="Ooze">Ooze</option>
                <option value="Monstrosity">Monstrosity</option>
                <option value="Giant">Giant</option>
                <option value="Beast">Beast</option>
                <option value="Plant">Plant</option>
            </select>
            <p>--------------------------</p>

            <h2 className="Red-text-no-margin">Create Monster</h2>
            <br></br>
            <form onSubmit={this.preventDefaulter}>
                <h4 className="Red-text-no-margin">Name</h4>
                <input className="Input" type="text" placeholder="Name" value={this.state.name} onChange={(event) => this.handleNameSubmit(event)}/>
                    <br></br>
                    <br></br>
                <h4 className="Red-text-no-margin">Image URL</h4>
                <input className="Input" type="text" placeholder="Image URL" value={this.state.url} onChange={(event) => this.handleUrlSubmit(event)}/>
                    <br></br>
                    <br></br>
                {/* <input className="Input" type="text" placeholder="Species" value={this.state.type} onChange={(event)=> this.handleSpeciesSubmit(event)}/> */}
                <h4 className="Red-text-no-margin">Species</h4>
                <select className="Drop-down" onChange={(event)=> this.handleSpeciesSubmit(event)}>
                    <option value="Aberration">Aberration</option>
                    <option value="Elemental">Elemental</option>
                    <option value="Ooze">Ooze</option>
                    <option value="Monstrosity">Monstrosity</option>
                    <option value="Giant">Giant</option>
                    <option value="Beast">Beast</option>
                    <option value="Plant">Plant</option>
                </select>
                    <br></br>
                    <br></br>
                <input className="Submit" type="submit" value="Submit"/>
            </form>
        </div>
        )
    }
}

export default SearchBar;