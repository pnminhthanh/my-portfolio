import * as React from 'react'

import { TEXTS } from '../../../static/text'

const Portfolio = () => (
    <div className="resume-page">
        <div className="page--header">
            <h1 className="header-title">{TEXTS.RESUME_PAGE.TITLE}</h1>
            <h3 className="header-subtitle">{TEXTS.RESUME_PAGE.SUBTILE()}</h3>
        </div>
    </div>
)

export default Portfolio
