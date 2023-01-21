import React from 'react';
import { Link } from "gatsby";

import { Icon } from '..';
import { NAVIGATIONS, SOCIAL_CHANNELS } from '../../models/menu';
import { TEXTS } from '../../static/text';
import './styles.css';

const Menu = () => {
    return <nav className='layout-menu-container'>
        <div className="layout-menu--information">
            <Link to="/">
                <div className="layout-menu--information-avatar image-avatar" />
            </Link>
            <div className="name">{TEXTS.MENU.NAME}</div>
            <div className="title">{TEXTS.MENU.TITLE}</div>
        </div>
        <div className="layout-menu--navigation-wrapper">
            <Navigations />
        </div>
        <div className="layout-menu--keep-in-touch-wrapper">
            <div className="title">Get in touch</div>
            <div className="social-buttons">
                <SocialChannels />
            </div>
        </div>
    </nav>
}

export default Menu;

const Navigations = () => {
    return <>
        {
            NAVIGATIONS.map(item => (
                <Link key={`layout-menu--navigation-item-${item.name}`}
                    to={item.link}
                    className="layout-menu--navigation-item"
                    activeClassName="active">
                    {item.name}
                </Link>
            ))
        }
    </>
}

const SocialChannels = () => {
    return <>
        {
            SOCIAL_CHANNELS.map(item => (
                <a key={`layout-menu--social-item-${item.iconKey}`} href={item.link} target="_blank" type="button">
                    <div className="layout-menu--social-item">
                        <Icon name={item.iconKey} size={item.size} />
                    </div>
                </a>
            ))
        }
    </>
}