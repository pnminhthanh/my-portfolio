import * as React from 'react';
import { Menu } from '.';

export const Layout = (props) => (
    <div className="layout-container bg-cover">
        <Menu />
        <div className="layout-content">
            {props.children}
        </div>
    </div>
)
