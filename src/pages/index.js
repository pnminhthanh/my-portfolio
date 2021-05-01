import * as React from "react"
import { Link } from "gatsby";
import { Menu, Layout } from '../components';
import '../components/index.css';

const IndexPage = (props) => (
  <Layout>
    <div className="layout-content">
      <main>{props.children}</main>
      <h1>Hello world, I'm  Minh Thanh</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </div>
  </Layout>
)

export default IndexPage
