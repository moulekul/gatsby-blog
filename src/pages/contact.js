import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head' 

const ContactPage = () => {
    return (
        <div>
            <Layout>
                <Head title="Contact" />
            <h1>Contact</h1>
            <p>   
                If you're a fan of social media, you can find me
                on <Link to="https://www.linkedin.com/in/lukemoule/" target="_blank">LinkedIn</Link>, among the 
                sea of other professionals.
            </p>
            <p>
                Alternatively, you can reach me via <Link to="mailto:lukemoule20@gmail.com">e-mail</Link>.
                Kind, thoughtful messages are encouraged and appreciated. Seriously — go for it! I will read your
                message and likely respond. I still find it quaint to connect with people through email.
            </p>
            </Layout>
        </div>
    )
}

export default ContactPage