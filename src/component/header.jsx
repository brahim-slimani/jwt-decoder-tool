import React from 'react';

export const Header = (props) => {
    return (
        <nav className="navbar navbar-light custom-header">
            <div className="left-nav">
                <a className="navbar-brand" href="index" style={{color:"white"}}>
                    dev-tools
                </a>
            </div>
            <div className="right-nav">
                <a href="https://slimani-ibrahim.github.io/profile" target="_blank" rel="noreferrer">
                    <i class="bx icofont-globe"></i>
                </a>&nbsp;&nbsp;
                <a href="https://github.com/Slimani-Ibrahim" target="_blank" rel="noreferrer">
                    <i class="bx icofont-github" title="github"></i>
                </a>&nbsp;&nbsp;
                <a href="https://www.linkedin.com/in/ibrahim-slimani-184161b2/" target="_blank" rel="noreferrer">
                    <i class="bx icofont-linkedin" title="linkedin"></i>
                </a>&nbsp;&nbsp;
                <a href="https://github.com/Slimani-Ibrahim/covid19.dz" target="_blank" rel="noreferrer">
                    <i class="bx icofont-code-fork" title="source code"></i>
                </a>
            </div>

        </nav>
    );
}