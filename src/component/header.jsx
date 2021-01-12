import React from 'react';
import iconJWT from '../assets/img/jwt.jpg';

export const Header = (props) => {
    return (
        <nav className="navbar navbar-light custom-header">
            <div className="left-nav">
                <a className="navbar-brand" href="index" style={{ color: "white" }}>
                    <img src={iconJWT} height="25" alt="img"/> decoder
                </a>
            </div>
            <div className="right-nav">
                <a href="https://slimani-ibrahim.github.io/profile" target="_blank" rel="noreferrer">
                    <i class="bi bi-globe" title="portoflio" />
                </a>&nbsp;&nbsp;
                <a href="https://github.com/Slimani-Ibrahim" target="_blank" rel="noreferrer">
                    <i class="bi bi-github" title="github"></i>
                </a>&nbsp;&nbsp;
                <a href="https://www.linkedin.com/in/ibrahim-slimani-184161b2/" target="_blank" rel="noreferrer">
                    <i class="bi bi-linkedin" title="linkedin"></i>
                </a>&nbsp;&nbsp;
                <a href="https://github.com/Slimani-Ibrahim/jwt-decoder" target="_blank" rel="noreferrer">
                    <i class="bi bi-code-slash" title="source code"></i>
                </a>
            </div>

        </nav>
    );
}