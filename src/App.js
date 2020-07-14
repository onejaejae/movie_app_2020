import React from 'react';
import PropTypes from "prop-types";

const foodILike= [
  {
    id : 1,
    name : "Kimchi",
    image : "https://images.unsplash.com/photo-1583224944844-5b268c057b72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" ,
    rating : 5
  },
  {
    id : 2,
    name : "Samgyeopsal",
    image : "https://images.unsplash.com/photo-1550388341-d3d5ac2a724e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    rating : 4.9
  },
  { 
    id : 3,
    name : "Bibimbap",
    image : "https://images.unsplash.com/photo-1553163147-622ab57be1c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    rating : 4.8
  },
  {
    id : 4,
    name : "Doncasu",
    image : "https://images.unsplash.com/photo-1513262599279-d287e25f4d84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    rating : 4.7
  },
  {
    id : 5,
    name : "Kimbap",
    image : "https://images.unsplash.com/photo-1532347231146-80afc9e3df2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    rating : 4.6
  }
];

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

function App() {
  return (
    <div>
      {foodILike.map(dish => 
      <Food 
        key = {dish.id}
        name = {dish.name}
        picture = {dish.image} 
        rating = {dish.rating} 
      />
      )}
    </div>
  );
}

export default App;
