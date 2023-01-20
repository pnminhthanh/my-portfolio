import * as React from 'react';

import { Layout } from '../components';
import '../components/index.css';
import { CONTACTS } from '../models/contact';

const Portfolio = () => {
    const renderCardItems = React.useMemo(() => {
        return CONTACTS.map(item => {
            return <div className='contact-card--item' key={`contact-card--item-${item.title}`}>
                <div className="title"><b>{item.title}: </b></div>
                <div className="content"><a href={item.url} target="_blank">{item.content}</a></div>
            </div>
        })
    }, [])

    return <Layout>
        <div className="contact-page">
            <div className='page--header'>
                <h1 className='header-title'>CONTACT ME</h1>
                <h3 className='header-subtitle'>I'm currently looking for new full-time job oppoturnities.</h3>
            </div>
            <div className='page--content'>
                <div className='contact-card-container'>
                    {renderCardItems}
                </div>
            </div>
        </div>
    </Layout>
}

export default Portfolio;
