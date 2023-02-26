import React from "react";
import { NavLink } from 'react-router-dom';
import variables from '../styles/_settings.scss';
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

const Navigation = () => {

    const navRef = useRef(null);

    const showNav = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    const changeRootbgColor = (color) => {
        document.documentElement.style.setProperty('--bgColor', color);
    }

    const NavItem = (props) => {
        return <a
            style={{ color: props.color }} onClick={() => changeRootbgColor(props.color)}
        >{props.title}</a >;
    };

    return (
        <header>
            <nav ref={navRef} className="nav-links">
                <NavLink to="/news" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <NavItem color={variables.newsColor} title="NEWS" />
                </NavLink>
                <NavLink to="/artists" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <NavItem color={variables.artistsColor} title="ARTISTS" />
                </NavLink>
                <NavLink to="/project" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <NavItem color={variables.projectColor} title="PROJECT" />
                </NavLink>
                <NavLink to="/teams" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <NavItem color={variables.teamsColor} title="TEAMS" />
                </NavLink>
                <NavLink to="/3d" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <NavItem color={variables.troisdColor} title="3D" />
                </NavLink>
                <button className="nav-btn nav-close-btn" onClick={showNav}>
                    <FaTimes style={{ color: "#808080" }} />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNav}>
                <FaBars style={{ color: "#808080" }} />
            </button>
        </header>
    );
};

export default Navigation;