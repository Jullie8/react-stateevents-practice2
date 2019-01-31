import React, { Component } from "react";
import BeyCard from './BeyCard'
export default class Favorites extends Component {
  render() {
    let beyInfoCard = this.props.beyInfo().map(bey => <BeyCard key={bey.id} beyInfo={bey} clickHandler={this.props.clickHandler}/>)
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {beyInfoCard}
      </div>
    );
  }
}
