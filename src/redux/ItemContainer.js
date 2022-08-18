import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { buyCake, bakeCake } from "../redux/cake/cakeActions";
import { buyIceCream } from "../redux/iceCream/iceCreamActions";

function ItemContainer(props) {
    return (
        <div>
            <h2> Item - {props.item}</h2>
            <button onClick={props.buyItem}>Buy Item</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams
    return {
        item: itemState,
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        buyItem: () => {
            if (ownProps.cake) {
                dispatch(buyCake());
            } else {
                dispatch(buyIceCream());
            }
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);