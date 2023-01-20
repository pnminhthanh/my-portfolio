import * as React from "react";
import { useSpring, animated } from 'react-spring';
import { Layout } from '../components';

import '../components/index.css';
import { TEXTS } from "../static/text";

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
