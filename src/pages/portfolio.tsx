import * as React from 'react';

import { Layout } from '../components';
import '../components/index.css';
import { IProject, TIMELINE } from '../models/portfolio';


const Portfolio = () => {
    const renderProjectItem = (data: IProject[]) => {
        if (!data || data.length === 0) return;
        return data.map(item => {
            return <div className='project'>
                <div className='project-name'>{item.url ? <a href={item.url} target="_blank">{item.name}</a> : item.name}</div>
                {item.desc && <div className='project-short-desc'>{item.desc}</div>}
            </div>
        })
    }

    const renderParagraph = (data: string[]) => {
        if (!data || data.length === 0) return;
        return data.map((item, index) => {
            return <p key={`paragraph-${index}`}>{item}</p>
        })

    }

    const renderTimelineItems = React.useMemo(() => {
        return TIMELINE.map((item, index) => (
            <div className='timeline' key={`timeline-${index}`}>
                <div className='timeline-year'>
                    <div className='milestone'>
                        {item.time}
                    </div>
                    <div className='cooperation'>{item.companyUrl ? <a href={item.companyUrl} target="_blank">{item.companyName}</a> : item.companyName}</div>
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
                <div className='header-title'>Portfolio</div>
                <div className='header-subtitle'>
                    Below is my timeline work experience. My main role in each project is <b>Frontend developer</b>.
                </div>
            </div>
            <div className='page--content'>
                {renderTimelineItems}
            </div>
        </div>
    </Layout>
}
export default Portfolio;