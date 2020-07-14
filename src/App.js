import React from 'react';
import PropTypes from "prop-types";

function Food({name, picture, rating}){
  return (
  <div>
    <h2>I like {name}!</h2>
    <h4>{rating}/5.0</h4>
    <img src = {picture} alt = {name} />
  </div>
  )
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
}

class App extends React.Component {
  constructor(props){
    super(props);
    console.log("hello");
  }
  state = {
    count : 0
  };
  add = () => {
    this.setState(current => ({count : current.count +1}));
  };
  minus = () => {
    this.setState(current => ({count : current.count -1}));
  };
  componentDidMount(){
    console.log("component rendered");
  }
  componentDidUpdate(){
    console.log("I just Update!");
  }
  componentWillUnmount(){
    console.log("Goodbye, cruel world");
  }
  render(){
    console.log("I`am rendering");
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick = {this.add}>Add</button>
        <button onClick = {this.minus}>Minus</button>
      </div>
    );
  }
}
export default App;
