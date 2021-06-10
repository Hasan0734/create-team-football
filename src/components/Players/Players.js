import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import data from "../../data/data.json";
import Player from "../Player/Player";
import Team from "../Team/Team";
import "./Players.css";
const Players = () => {
  const [players, setPlayers] = useState([]);
  const [team, setTeam] = useState([]);

  const handleAddToTeam = (player) => {
    const newTeam = team.includes(player)? team : [...team, player]
   
    setTeam(newTeam)
    }
 

  useEffect(() => {
    setPlayers(data);
  });

  return (
    <div className=" mt-5 d-flex">
      <div className="players-container">
        <h1 className="text-center">All Players</h1>
        <div className="row  row-cols-1 row-cols-md-3 g-4">
          {players.map((player) => (
            <Player player={player} handleAddToTeam={handleAddToTeam}></Player>
          ))}
        </div>
      </div>
      <div classNam="team-container">
        <h2>Team :{team.length}</h2>
        <Team></Team>
      </div>
    </div>
  );
};

export default Players;
