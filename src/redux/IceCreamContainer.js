import React from "react";
import { buyIceCream } from "../redux";
import { useSelector, useDispatch } from "react-redux/es/exports";

function IceCreamContainer(props){
    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch();
    return(
        <div>
            <h2>NUmber of Ice Creams - {numOfIceCreams}</h2>
            <button onClick={()=> dispatch(buyIceCream())}>Buy Ice Cream</button>
        </div>
    )
}

export default IceCreamContainer;
