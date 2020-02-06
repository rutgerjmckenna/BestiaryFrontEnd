import React from 'react';

class FavoriteCard extends React.Component {

    state = {
        name: this.props.monster.name,
        type: this.props.monster.type,
        url: ""
    }

    hoverFavorite = (url) => {
        this.setState({url: url})
    }

    hoverOff = () => {
        this.setState({url: ""})
    }
 
    render() {
        return(
            <div onClick={() => this.props.clickHandler(this.props.monster)} onMouseEnter={()=> this.hoverFavorite(this.props.monster.url)} onMouseLeave={() => this.hoverOff()}>
                <h2 className="Red-text-no-margin">~{this.props.monster.name}</h2>
                <img  className="Favorite-img" src={this.state.url} alt=""/>
            </div>
        )
    }
}

export default FavoriteCard