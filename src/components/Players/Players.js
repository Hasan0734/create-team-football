import React from 'react';
import data from '../../data/data.json';
import Player from '../Player/Player';
import './Players.css'
const Players = () => {
    
    return (
        <div className="container mt-5 players-container">
            <h1 className="text-center">All Players</h1>
            <div className="row">
                <Player></Player>
            </div>
        </div>
    );
};

export default Players;