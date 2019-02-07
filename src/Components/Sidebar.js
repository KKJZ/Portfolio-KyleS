import React from "react";
// import {BrowserRouter as Link} from "react-router-dom";
import LinkButton from "./LinkButton";

export default function Sidebar(props) {
    const active = props.Active;
    const flexFix = {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between"
    };
    return (
    <div className="column is half">
        <aside className="menu left-menu">
            <ul className="menu-list" style={flexFix}>
            <li>
                <LinkButton to="/" active={active} content="home" onClick={e => props.onClick(e)}>Home</LinkButton>
            </li>
            <li>
                <LinkButton to="/projects" active={active} content="projects" onClick={e => props.onClick(e)}>Projects</LinkButton>
            </li>
            <li>
                <LinkButton to="/about" active={active} content="about" onClick={e => props.onClick(e)}>About</LinkButton>
            </li>
            <li>
                <LinkButton to="/contact" active={active} content="contact" onClick={e => props.onClick(e)}>Contact</LinkButton>
            </li>              
            </ul>
        </aside>
    </div>
    )
};