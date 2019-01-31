import React from "react";

class BeyCard extends React.Component {

  handlesClick = () =>{
    this.props.clickHandler(this.props.beyInfo)
  }
  render() {
    return (
      <div>
        <h3>{this.props.beyInfo.name}</h3>
       <img alt="bey" src={this.props.beyInfo.img} onClick={this.handlesClick}/>

      </div>
    );
  }
}

export default BeyCard;
