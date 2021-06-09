import React from 'react';
import './Player.css'
const Player = (props) => {
    const {name, img} = props.player
    return (
        <div className="col">
            <div className='card h-50'>
               
               <img className="card-img-top h-75" src={img} alt="" />
             
                <div className="card-body"> 
                <h3>{name}</h3>
                </div>
            </div>
        </div>
    );
};

export default Player;