import * as React from "react";
import { useSpring, animated } from 'react-spring';
import { Layout } from '../components';

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
      <h1>Hello,<br /> I'm  Minh Thanh.</h1>
      <p>A front-end developer from Ho Chi Minh City. <br />I'm interested in web design mockup and turn things from a draft to a "real".</p>
      <p>Welcome to my website.</p>
    </animated.div>
  </Layout>
}

export default IndexPage
