import React from 'react';
import './Team.css'
const Team = (props) => {   
   const team =  props.team
   const totalSalary = team.reduce((total, sum) => total + sum.salary, 0)
    return (
        <div className="selected-player card">
            <h4>Select Player: {team.length}</h4>
            <ol>
              {
                  team.map(player =><div> <li>{player.name}</li> <p>salary: ${player.salary}</p></div> )
              }
            </ol>
            <div className="card-footer">
                <h5>Total Cost: ${totalSalary}</h5>
            </div>
        </div>
    );
};

export default Team;