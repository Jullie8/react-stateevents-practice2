import React from "react";
// import beyImages from "./beyImages";
import BeyCard from './BeyCard'

class BeyContainer extends React.Component {
 
  render() {
    let imagesOfBey = this.props.beyInfo.map((bey)=>{
      return <BeyCard key={bey.id} beyInfo={bey} clickHandler={this.props.clickHandler} />
    })
    return (
      <div className="index">
        <h1>Index</h1>
        {imagesOfBey}
      </div>
    );
  }
}

export default BeyContainer;
