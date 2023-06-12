import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <div>
        <Layout>
        <h1>Hi, I'm Luke.</h1>
        <h2>Who? I hear you ask.</h2>
        <p>
          I’m just a dude who decided to make a website to inchoately, obliviously, and unintelligibly vent about life. 
          Some may call it a blog, but I personally consider my ramblings to be mostly junk and meritless; calling this
          a blog would be far too complimentary!
        </p>
        <p>
          I’m not all that special, successful, interesting, or brilliant, though I'd hope others might say otherwise. For me, 
          this is simply a medium through which I can express my running thoughts. Perhaps they will prove to be valuable some
          day, who knows?
        </p>
        <p>
          If you want to find out more about this specific project and the motivation behind it, you can do so <Link to="/about">here</Link>.
          Subsequently, if you're impressed by what you see and are in search of a developer, feel
          free to <Link to="/contact">contact me</Link>.
        </p>

        </Layout>
    </div>
  )
}

export default IndexPage
