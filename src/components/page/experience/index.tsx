import * as React from 'react';

import { IProject, TIMELINE } from '../../../models/portfolio';
import { TEXTS } from '../../../static/text';

import './styles.css';

const Experience = () => {
    const renderProjectItem = (data: IProject[]) => {
        if (!data || data.length === 0) return;
        return data.map((item, index) => {
            return <div className='project' key={`project-${index}`}>
                <div className='project-name'>
                    {item.url ? <a href={item.url} target="_blank">{item.name}</a> : item.name}
                </div>
                {item.desc && <div className='project-short-desc'>{item.desc}</div>}
                {item.tech && item.tech.length > 0 &&
                    <div className='project-tech-stack'>
                        <label>{TEXTS.EXPERIENCE_PAGE.TECH_STACK}</label>
                        {
                            item.tech.map((tech, index) => (
                                <span className='project-tech-item' key={`${tech}-${index}`}>{tech}</span>
                            ))
                        }
                    </div>
                }
            </div>
        })
    }

    const renderResponsibilities = (data: string[]) => {
        if (!data || data.length === 0) return;
        return <div className='responsibilities'>
            <div>{TEXTS.EXPERIENCE_PAGE.RESPONSIBILITIES}</div>
            <ul>
                {
                    data.map((item, index) => (
                        <li key={`paragraph-${index}`}>{item}</li>
                    ))
                }
            </ul>
        </div>
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
                    {item.responsibilities && renderResponsibilities(item.responsibilities)}
                </div>
            </div>
        ))
    }, [])

    return <div className="experience-page">
        <div className='page--header'>
            <h1 className='header-title'>{TEXTS.EXPERIENCE_PAGE.TITLE}</h1>
            <h3 className='header-subtitle'>
                {TEXTS.EXPERIENCE_PAGE.SUBTILE()}
            </h3>
        </div>
        <div className='page--content'>
            {renderTimelineItems}
        </div>
    </div>
}

export default Experience;
