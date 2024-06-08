import React from "react";
import CardModel from "./CardModel";

const info = [
            {img: "https://images.unsplash.com/photo-1717319617633-99821a8d8e04?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
            title: "First title",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eveniet eos dolore quam, est natus rem aperiam adipisci id animi provident eum earum autem hic odit ipsum nisi consequuntur reiciendis."
            },
            {img: "https://images.unsplash.com/photo-1714579340610-88f3a5ce6a18?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D",
            title: "Second title",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eveniet eos dolore quam, est natus rem aperiam adipisci id animi provident eum earum autem hic odit ipsum nisi consequuntur reiciendis."
            }, 
            {img: "https://images.unsplash.com/photo-1717085102241-15e29d685c8f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D",
            title: "Third title",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eveniet eos dolore quam, est natus rem aperiam adipisci id animi provident eum earum autem hic odit ipsum nisi consequuntur reiciendis."
            },
            {img: "https://images.unsplash.com/photo-1717147364684-ceaa602e1ddb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D",
            title: "Fourth title",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eveniet eos dolore quam, est natus rem aperiam adipisci id animi provident eum earum autem hic odit ipsum nisi consequuntur reiciendis."
            }]


function Card () {
    return (
        <div className="container p-0">
            <div className = "row row-cols-1 row-cols-md-4 g-1 d-flex justify-content-center my-5">
                {info.map((item) => <CardModel img={item.img} title={item.title} description={item.description}/>)}
            </div>
        </div>
    )
};

export default Card;