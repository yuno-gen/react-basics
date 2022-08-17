import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { buyCake, bakeCake } from "../redux/cake/cakeActions";

function CakeContainer(props) {
  const [numberOfCakes, setNumberOfCakes] = useState(1);
  const [bakingQuant, setBakingQuant] = useState(1);
  // const numOfCakes = useSelector(state => state.cake.numOfCakes);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setNumberOfCakes(event.target.value);
    // console.log("state: ", props);
  };
 
  const handleBake = (event) => {
    setBakingQuant(event.target.value);
    // console.log("state: ", props);
  };

  const handleClick = () => {
    buyCake(numberOfCakes);
  };

  const bakeCall=()=>{
    console.log("bakeCall", props);
  }

  return (
    <div>
      <h2>Hello</h2>
      {/* <h2>Number of cakes: {numOfCakes}</h2> */}
      <h2>Number of cakes: {props.numOfCakes}</h2>
      <input type="number" value={numberOfCakes} onChange={handleChange} />
      {/* <button onClick={dispatch(handleClick)}>Buy</button> */}
      <button onClick={()=>props.buyCake(numberOfCakes)}>Buy {numberOfCakes} cakes </button><br></br>
      <input type="number" value={bakingQuant} onChange={handleBake} />
      {/* <button onClick={dispatch(handleClick)}>Buy</button> */}
      <button onClick={()=> props.bakeCake(bakingQuant)}>Bake {bakingQuant} cakes </button>
    </div>
  );
}

// export default cakeContainer;
const mapStateToProps = (state, ownProps) => { 
  // const itemState = ownProps.cake ? state.cake.numOfCakes : state.ice
  return {
    numOfCakes: state.cake.numOfCakes,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    buyCake: (numOfCakes) => dispatch(buyCake(numOfCakes)),
    bakeCake: (numOfCakes) => dispatch(bakeCake(numOfCakes)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);