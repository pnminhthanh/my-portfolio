import * as React from "react";
import { useSpring, animated } from '@react-spring/web';

import { Layout } from '../components';
import { TEXTS } from "../static/text";
import '../components/index.css';

const IndexPage = () => {
    const props = useSpring({
        to: { opacity: 1, top: 0 },
        from: { opacity: 0, top: -100 },
        delay: 200,
        reset: true,
        config: { duration: 600 }
    })

    return <Layout>
        <animated.div style={props} className="introduction-page">
            {TEXTS.HOME_PAGE.HELLO()}
            {TEXTS.HOME_PAGE.INTRO()}
            {TEXTS.HOME_PAGE.WELCOME()}
        </animated.div>
    </Layout>
}

export default IndexPage
