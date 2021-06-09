import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import data from '../../data/data.json';
import Player from '../Player/Player';
import './Players.css'
const Players = () => {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        setPlayers(data)
    })
    return (
        <div className="container mt-5 players-container">
            <h1 className="text-center">All Players</h1>
            <div className="row  row-cols-1 row-cols-md-3 g-4">
               {
                   players.map(player => <Player player={player}></Player>)
               }
            </div>
        </div>
    );
};

export default Players;