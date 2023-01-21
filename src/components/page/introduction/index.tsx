import * as React from 'react'
import { useSpring, animated } from '@react-spring/web'

import { TEXTS } from '../../../static/text'
import './styles.css'

const IndexPage = () => {
  const props = useSpring({
    to: { opacity: 1, top: 0 },
    from: { opacity: 0, top: -100 },
    delay: 200,
    reset: true,
    config: { duration: 600 },
  })

  return (
    <animated.div style={props} className="introduction-page">
      {TEXTS.HOME_PAGE.HELLO()}
      {TEXTS.HOME_PAGE.INTRO()}
      <div className="introduction-button">{TEXTS.HOME_PAGE.WELCOME()}</div>
    </animated.div>
  )
}

export default IndexPage
