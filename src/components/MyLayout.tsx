import * as React from 'react';
import Seo, { Menu } from '.';

export const Layout = (props) => (
    <div className="layout-container bg-cover">
        <Seo title="Portfolio" />
        <Menu />
        <div className="layout-content">
            {props.children}
        </div>
    </div>
)
