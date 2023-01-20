import React from 'react';
import { Link } from "gatsby";

import { Icon } from '.';
import { NAVIGATIONS, SOCIAL_CHANNELS } from '../models/menu';

export const Menu = () => {
    const renderNavigationItems = () => {
        return NAVIGATIONS.map(item => (
            <Link key={`layout-menu--navigation-item-${item.name}`}
                to={item.link}
                className="layout-menu--navigation-item"
                activeClassName="active">
                {item.name}
            </Link>
        ))
    }

    const renderSocialItems = () => {
        return SOCIAL_CHANNELS.map(item => {
            let key = 'layout-menu--social-item-' + item.iconKey
            return <a key={key} href={item.link} target="_blank" type="button">
                <div className="layout-menu--social-item">
                    <Icon name={item.iconKey} size={item.size} />
                </div>
            </a>
        })
    }

    return <div className="layout-menu-container">
        <div className="layout-menu--information">
            <Link to="/">
                <div className="layout-menu---information-avatar image-avatar" />
            </Link>
            <div className="name">Phạm Ngọc Minh Thanh</div>
            <div className="title">Front-end Software Engineer</div>
        </div>
        <div className="layout-menu--navigation-wrapper">
            {renderNavigationItems()}
        </div>
        <div className="layout-menu--keep-in-touch-wrapper">
            <div className="title">Get in touch</div>
            <div className="social-buttons">
                {renderSocialItems()}
            </div>
        </div>
    </div>
}