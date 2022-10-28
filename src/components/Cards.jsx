import React from "react";

function Cards(props){
    return(
        
            <div className="cardd col-lg-4 col-sm-4" style={{width: "18rem" }}>
                <img  className="img-shape" src={props.img} alt="img" />
                <div className="card-body">
                    <h5 className="card-title">{props.titl}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
       
    )
}

export default Cards;