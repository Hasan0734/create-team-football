import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <div className="bg-overlay">
                <nav className="navbar">
                    <div className="container-fluid">
                        <a href="/home" class="navbar-brand fs-2 text-light">CreatTeam</a>
                        <div className="d-flex">
                            <a className="nav-link" href="/home">Home</a>
                            <a className="nav-link" href="/player">Player</a>
                            <a className="nav-link" href="/about">About</a>
                        </div>
                    </div>
                </nav>
                <div className="content container-fluid d-flex align-items-center">
                    <div className="w-75">
                        <h1>Hello, Welcome</h1>
                        <br />
                        <h3>Create Your Own Team !!</h3>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos libero laborum quas laboriosam, ea minima quaerat placeat itaque cupiditate aspernatur ut id porro animi. Recusandae necessitatibus voluptatibus accusamus ipsam consequuntur sit illo eius dolorem minus accusantium, voluptates quaerat illum enim rerum deleniti sed quasi maiores perferendis veritatis? Pariatur, tempore nesciunt.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;