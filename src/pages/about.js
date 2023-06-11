import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <div>
            <Layout>
            <h1>About Me</h1>
            <p>I’m just a dude who decided to make a website to document his life.
               I’m not all that special, successful, interesting, or brilliant, though others would say otherwise.</p>
            <p><Link to="/contact">Want to work with me? Reach out.</Link></p>
            </Layout>
        </div>
    )
}

export default AboutPage