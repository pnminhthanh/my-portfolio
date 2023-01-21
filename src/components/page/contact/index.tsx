import * as React from 'react';
import { useSpring, animated } from '@react-spring/web';

import { CONTACTS } from '../../../models/contact';
import './styles.css';
import { TEXTS } from '../../../static/text';

const Contact = () => {
    const props = useSpring({
        from: { opacity: 1, top: -100 },
        to: { opacity: 1, top: 0 },
        reset: true,
        config: { duration: 300 }
    })

    const renderCardItems = React.useMemo(() => {
        return CONTACTS.map(item => {
            return <div className='contact-card--item' key={`contact-card--item-${item.title}`}>
                <div className="title"><b>{item.title}: </b></div>
                <div className="content"><a href={item.url} target="_blank">{item.content}</a></div>
            </div>
        })
    }, [])

    return <animated.div style={props} className="contact-page">
        <div className='page--header'>
            <h1 className='header-title'>{TEXTS.CONTACT_PAGE.TITLE}</h1>
            <h3 className='header-subtitle'>{TEXTS.CONTACT_PAGE.SUBTILE}</h3>
        </div>
        <div className='page--content'>
            <div className='contact-card-container'>
                {renderCardItems}
            </div>
        </div>
    </animated.div>
}

export default Contact;
