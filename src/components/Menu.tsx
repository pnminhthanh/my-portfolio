import React from 'react';
import { Link } from "gatsby";
import { Icons } from '.';

interface ISocialItems {
    iconKey: 'mail' | 'linkedin' | 'fb' | 'git',
    link: string,
    size?: number
}

export const Menu = () => {
    const navigations = [
        { name: 'PORTFOLIO', link: '/portfolio' },
        { name: 'CONTACT ME', link: '/contact' },
        { name: 'MY CV', link: 'https://drive.google.com/file/d/1EfHUhBAr06WHcOocttreh44R6XRdjT9x/view?usp=sharing', isOuterLink: true },
    ]

    const socialItems = [
        { iconKey: 'mail', link: 'mailto:minhthanh3497@gmail.com' },
        { iconKey: 'linkedin', link: 'https://www.linkedin.com/in/pnminhthanh/' },
        { iconKey: 'fb', link: 'https://www.facebook.com/mthanh97/' },
        { iconKey: 'git', link: 'https://github.com/pnminhthanh/', size: 30 }
    ] as ISocialItems[];

    const __renderNavigationItems = () => {
        return navigations.map(item => {
            let key = 'layout-menu--navigation-item-' + item.name
            return <Link key={key}
                to={item.link}
                className="layout-menu--navigation-item"
                activeClassName="active">
                {item.name}
            </Link>
        })
    }

    const __renderSocialItems = () => {
        return socialItems.map(item => {
            let key = 'layout-menu--social-item-' + item.iconKey
            return <a key={key} href={item.link} target="_blank" type="button">
                <div className="layout-menu--social-item">
                    <Icons name={item.iconKey} size={item.size} />
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
            {__renderNavigationItems()}
        </div>
        <div className="layout-menu--keep-in-touch-wrapper">
            <div className="title">Get in touch</div>
            <div className="social-buttons">
                {__renderSocialItems()}
            </div>
        </div>
    </div>
}