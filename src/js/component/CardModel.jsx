import React from "react";

function CardModel (props) {
    return (
        <div className="card mx-2" style={{width: "16rem"}}>
                <img src={props.img} className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href="#" className="btn btn-primary">Find out more</a>
                </div>
        </div>
    )
}

export default CardModel;