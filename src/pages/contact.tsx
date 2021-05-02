import * as React from 'react';
import { Layout } from '../components';

const Portfolio = () => {

    const __renderCardItem = () => {
        return cardItems.map(item => {
            return <div className='contact-card--item' key={`contact-card--item-${item.title}`}>
                <div className="title"><b>{item.title}: </b></div>
                <div className="content"><a href={item.url} target="_blank">{item.content}</a></div>
            </div>
        })
    }

    return <Layout>
        <div className="contact-page">
            <div className='page--header'>
                <div className='header-title'>CONTACT ME</div>
                <div className='header-subtitle'>I'm currently looking for new full-time job oppoturnities.</div>
            </div>
            <div className='page--content'>
                <div className='contact-card-container'>
                    {__renderCardItem()}
                </div>
            </div>
        </div>
    </Layout>
}

const cardItems = [
    { title: 'Email', content: 'minhthanh3497@gmail.com', url: 'mailto:minhthanh3497@gmail.com' },
    { title: 'Linkedin', content: 'pnminhthanh', url: 'https://www.linkedin.com/in/pnminhthanh/' },
    { title: 'Facebook', content: 'mthanh97', url: 'https://www.facebook.com/mthanh97/' },
    { title: 'Github', content: 'pnminhthanh', url: 'https://github.com/pnminhthanh/' }
]

export default Portfolio;