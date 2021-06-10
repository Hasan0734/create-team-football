import React from "react";
import "./Player.css";
const Player = (props) => {
  const { name, img, country, age, salary, currentTeam } = props.player;

  return (
    <div className="col">
      <div className="card h-100">
        <img className="card-img-top" src={img} alt="" />
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="d-flex justify-content-between">
            <p>Country: {country}</p>
            <p>Age: {age}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Current Team: {currentTeam}</p>
            <p>Salary: ${salary}</p>
          </div>
          <button onClick={() => props.handleAddToTeam(props.player)} className="btn btn-primary">Add To Team</button>
        </div>
      </div>
    </div>
  );
};

export default Player;
