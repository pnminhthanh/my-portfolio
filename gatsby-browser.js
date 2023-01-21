import * as React from 'react'

import { Layout } from './src/components'
import './src/components/index.css'

const onRouteUpdate = ({ location, prevLocation }) => {
  console.log('new pathname', location.pathname)
  console.log('old pathname', prevLocation ? prevLocation.pathname : null)
}

const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export { onRouteUpdate, wrapPageElement }
