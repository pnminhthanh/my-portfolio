import * as React from "react"
import PropTypes from "prop-types"

import Seo from "../seo"
import Menu from "../menu"

import './styles.css';

const Layout = ({ children }) => {
    return (
        <>
            <Seo title="Minh Thanh" />
            <div className="layout-container bg-cover">
                <Menu />
                <div className="layout-content">
                    {children}
                </div>
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout;
