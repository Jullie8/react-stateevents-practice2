import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import BeyContainer from './BeyContainer';
import Favorites from './Favorites';
import beyImages from './beyImages';


class App extends Component {
  state = {
    beyImages: beyImages
  };

  clickHandler = (beyObj) =>{
    // console.log(beyObj);
    //make a copy of the array do not want to destructively mutate the array 
    let copyOfOriginalArr= [...this.state.beyImages]
    //find returns the first element that satisfies the condition
    let foundBeyObj = copyOfOriginalArr.find((bey)=>{
      return bey.id === beyObj.id
    })
    //go into that object and then make the change of the key to its opposite
    foundBeyObj.favorite = !foundBeyObj.favorite;
    //set the state of beyImages to the copy of the arr
    //setState must listen for a change inorder to rerender
    this.setState({
      beyImages: copyOfOriginalArr
    })
    //purpose of this function is to setState aka rerender the DOM with new information of 
    //copyofArr with modified object
  }

  //now we have an arr we want only favorited to render only array of obj that were favorited
  beyfavorited = () =>{
    return this.state.beyImages.filter((bey)=>{
      return bey.favorite === true
    })
  }


  render() {
    return (
      <div className="container">
        <BeyContainer beyInfo={this.state.beyImages} clickHandler={this.clickHandler}/>
        <Favorites beyInfo={this.beyfavorited} clickHandler={this.clickHandler}/>
      </div>
    );
  }
}

export default App;
