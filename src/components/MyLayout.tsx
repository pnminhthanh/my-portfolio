import * as React from 'react';
import Seo, { Menu } from '.';

// @ts-ignore
import background from '../images/background.jpeg';

export const Layout = (props) => (
    <div className="layout-container bg-cover">
        <Seo title="Portfolio" />
        <Menu />
        <div className="layout-content">
            {props.children}
        </div>
    </div>
)
