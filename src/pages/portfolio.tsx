import * as React from 'react';

import { Layout } from '../components';
import '../components/index.css';
import { IProject, TIMELINE } from '../models/portfolio';
import { TEXTS } from '../static/text';


const Portfolio = () => {
    const renderProjectItem = (data: IProject[]) => {
        if (!data || data.length === 0) return;
        return data.map((item, index) => {
            return <div className='project' key={`project-${index}`}>
                <div className='project-name'>
                    {item.url ? <a href={item.url} target="_blank">{item.name}</a> : item.name}
                </div>
                {item.desc && <div className='project-short-desc'>{item.desc}</div>}
            </div>
        })
    }

    const renderParagraph = (data: string[]) => {
        if (!data || data.length === 0) return;
        return data.map((item, index) => (
            <p key={`paragraph-${index}`}>{item}</p>
        ))

    }

    const renderTimelineItems = React.useMemo(() => {
        return TIMELINE.map((item, index) => (
            <div className='timeline' key={`timeline-${index}`}>
                <div className='timeline-year'>
                    <div className='milestone'>
                        {item.time}
                    </div>
                    <div className='cooperation'>
                        {item.companyUrl
                            ? <a href={item.companyUrl} target="_blank">{item.companyName}</a>
                            : item.companyName}
                    </div>
                </div>
                <div className='timeline-content'>
                    {item.projects && renderProjectItem(item.projects)}
                    {item.paragraphs && renderParagraph(item.paragraphs)}
                </div>
            </div>
        ))
    }, [])

    return <Layout>
        <div className="portfolio-page">
            <div className='page--header'>
                <h1 className='header-title'>{TEXTS.PORTFOLIO_PAGE.TITLE}</h1>
                <h3 className='header-subtitle'>
                    {TEXTS.PORTFOLIO_PAGE.SUBTILE()}
                </h3>
            </div>
            <div className='page--content'>
                {renderTimelineItems}
            </div>
        </div>
    </Layout>
}

export default Portfolio;
