import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head' 

const AboutPage = () => {
    return (
        <div>
            <Layout>
                <Head title="About" />
            <h1>About</h1>
            <h2>The Website</h2>
            <p>
                This is a straightforward blog website built using Gatsby static site generator. It is powered by
                Contentful CMS and hosted for free on Netlify.
            </p>
            <h2>The Intention</h2>
            <p>
                This specific project has enabled me to develop skills that can add real value to any potential employers. 
                Learning Gatsby has given me the ability to rapidly generate static websites with excellent SEO. Furthermore,
                both Contenful and Netlify offer free initial services to clients, eliminating CMS and hosting fees.
                This approach to website development is evidently more cost effective than more popular alternatives
                such as WordPress. As a result, I personally view proficiency with these platforms to be invaluable.
            </p>
            <p>Like what you've seen? Be sure to <Link to="/contact">reach out</Link>. I'm available for work.</p>
            </Layout>
        </div>
    )
}

export default AboutPage