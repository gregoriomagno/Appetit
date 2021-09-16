import React from "react";
import "./CardFood.scss";
import { useHistory } from "react-router-dom";
const CardFood = (props) => {
    const history = useHistory();
    // const order = new Order(props.item);



    return (
        <button
            className="Container-card-new-order"
            onClick={() => { }}>
            <div className="Container-card-food-row-left">
                <img src={props.photo} alt="Photo" className="Photo" />
                <div className="Column-card-new-order">
                    <div className="Container-card-food-row">
                    <h6 className="Text-card-food">{props.title}</h6>
                        {props.value !== null && (
                            <h6 className="Text-card-food">{props.value}</h6>
                        )}
                        
                    </div>

                </div>
            </div>


        </button>
    );
};
export default CardFood;
