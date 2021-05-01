import React from 'react';
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

export const Menu = () => {
    return <div className="layout-menu-container">
        <div className="layout-menu--information">
            <StaticImage
                src="../images/avatar.jpg"
                className="layout-menu---information-avatar"
                width={200}
                height={200}
                quality={80}
                alt="my-avatar"
            />
            <div className="name">Phạm Ngọc Minh Thanh</div>
            <div className="title">Front-end Software Engineer</div>
        </div>
        <div className="layout-menu--navigation-wrapper">
            <Link to="/portfolio">PORTFOLIO</Link>
            <Link to="/contact">CONTACT ME</Link>
            <Link to="/cv">MY CV </Link>
        </div>
    </div>
}