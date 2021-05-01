import React from 'react';
import { Link } from "gatsby";

export const Menu = () => {
    return <div className="layout-menu-container">
        <div className="layout-menu--information">
            <Link to="/">
                <div className="layout-menu---information-avatar image-avatar" />
            </Link>
            <div className="name">Phạm Ngọc Minh Thanh</div>
            <div className="title">Front-end Software Engineer</div>
        </div>
        <div className="layout-menu--navigation-wrapper">
            <Link to="/portfolio" className="layout-menu--navigation-item" activeClassName="portfolio-active">PORTFOLIO</Link>
            <Link to="/contact" className="layout-menu--navigation-item" activeClassName="contact-active">CONTACT ME</Link>
            <Link to="/cv" className="layout-menu--navigation-item" activeClassName="cv-active">MY CV</Link>
        </div>
    </div>
}