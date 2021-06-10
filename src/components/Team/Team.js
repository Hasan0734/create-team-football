import React from 'react';
import './Team.css'
const Team = (props) => {
    
   const team =  props.team
    return (
        <div className="selected-player">
            <h4>Select Player: {team.length}</h4>
            <ol>
              {
                  team.map(player => <li>{player.name}</li>)
              }
            </ol>
        </div>
    );
};

export default Team;