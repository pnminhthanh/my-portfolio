import * as React from 'react';
import { Layout } from '../components';

interface IProjectItems {
    name: string,
    url?: string,
    desc?: string
}
interface ITimelineItems {
    time: string,
    companyName: string,
    companyUrl?: string,
    projects?: IProjectItems[],
    paragraphs?: string[]
}

const timelineItems = [
    {
        time: 'June 2020 - Now',
        companyName: 'Haravan',
        companyUrl: 'https://www.haravan.com/',
        projects: [
            {
                name: 'HaraSocial',
                url: 'https://harasocial.com/pages/features',
                desc: 'The platform supports your communication with your customer from many popular social media networks.'
            }
        ],
        paragraphs: [
            "Cooperate with team members to distribute value to the product. Work well with product team to release the final valued feature to end-user.",
            "I am able to work as a independent member when solving a problem and always try my best to do it."
        ]
    },
    {
        time: 'May 2019 - June 2020',
        companyName: 'S3Corp',
        companyUrl: 'https://www.s3corp.com.vn/',
        projects: [
            {
                name: 'Razer - Synapse 3',
                url: 'https://www.razer.com/synapse-3',
                desc: 'A desktop application supports user to modify their Razer gaming gears'
            },
            {
                name: 'THX Spatial',
                url: 'https://www.razer.com/p/RZ11-13000-0001',
                desc: 'A desktop application provide user the best realism sound experience via using Razer headphones.'
            },
            {
                name: 'Stream Companion App',
                url: 'https://www.razer.com/streamer-companion-app',
                desc: 'A desktop application supports user to customize effects of their Razer gears while streaming'
            }
        ],
        paragraphs: [
            "Support teammates in debugging and coding.",
            "Receiver task directly from customer and give the final results meet theirs requirements.",
            "Transfer from Sketch designs to React and handle logics with API"
        ]
    },
] as ITimelineItems[];

const Portfolio = () => {
    const __renderProjectItem = (data: IProjectItems[]) => {
        if (!data || data.length === 0) return;
        return data.map(item => {
            return <div className='project'>
                <div className='project-name'>{item.url ? <a href={item.url} target="_blank">{item.name}</a> : item.name}</div>
                {item.desc && <div className='project-short-desc'>{item.desc}</div>}
            </div>
        })
    }

    const __renderParagraph = (data: string[]) => {
        if (!data || data.length === 0) return;
        return data.map((item, index) => {
            return <p key={`paragraph-${index}`}>{item}</p>
        })

    }

    const __renderTimeLineItem = (data: ITimelineItems[]) => {
        if (!data || data.length === 0) return;
        return data.map((item, index) => {
            return <div className='timeline' key={`timeline-${index}`}>
                <div className='timeline-year'>
                    <div className='milestone'>
                        {item.time}
                    </div>
                    <div className='cooperation'>{item.companyUrl ? <a href={item.companyUrl} target="_blank">{item.companyName}</a> : item.companyName}</div>
                </div>
                <div className='timeline-content'>
                    {item.projects && __renderProjectItem(item.projects)}
                    {item.paragraphs && __renderParagraph(item.paragraphs)}
                </div>
            </div>
        })

    }
    return <Layout>
        <div className="portfolio-page">
            <div className='page--header'>
                <div className='header-title'>Portfolio</div>
                <div className='header-subtitle'>Below is my timeline work experience. My main role in each project is <b>ReactJS front-end developer</b>.</div>
            </div>
            <div className='page--content'>
                {__renderTimeLineItem(timelineItems)}
            </div>
        </div>
    </Layout>
}
export default Portfolio;