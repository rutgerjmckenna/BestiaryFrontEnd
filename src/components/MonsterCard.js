import React from 'react';

class MonsterCard extends React.Component{

    state = {
        counter: 0
    }



    addEncounter = () => {
        this.setState({counter: this.state.counter + 1})
    }

    removeEncounter = () => {
        this.setState({counter: this.state.counter - 1})
        if (this.state.counter === 0) {
            this.setState({counter: 0})
        }
    }

    // console.log("props:", props)
    render() {
        return(
            // props.monster.favorite
            <div>
                <p className="Change-font">Name:</p>
                    <h2 className="Red-text-no-margin">{this.props.monster.name}</h2>
                <p className="Change-font">Species:</p>
                    <h4 className="Red-text-no-margin">{this.props.monster.type}</h4>
                    <img src={this.props.monster.url} alt="" className="Img" onClick={() => this.props.clickHandler(this.props.monster)} />
                        <br></br>
                <button className="Red-text" onClick={this.addEncounter}>Add To Battle</button>
                <button className="Red-text" onClick={this.removeEncounter}>Defeated</button>
                    <h3 className="Red-text-no-margin">{this.state.counter}</h3>
                <p>------------------------------------------</p>
            </div>
        )
    }
}

export default MonsterCard