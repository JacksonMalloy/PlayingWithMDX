import { Link } from 'gatsby'
import React from 'react'
import Layout from '../Layout'

const WorkPage = () => {
  return (
    <Layout viewportLimit="1920px">
      <h1>Full Stack Development</h1>
      <p>
        As a full stack developer I have the capability of building out robust systems on both the server and client. I
        have experience developing systems that have reached upwards of 50,000 concurrent users. I also have experience
        with branding, marketing, search engine optimization, and analytics.
      </p>
      <h3>For Businesses</h3>
      <ul>
        <li>Are you looking for a new blazing fast website?</li>
        <li>Do you want to start up an ecommerce shop for your business?</li>
        <li>Are you working for a social cause that needs help online?</li>
        <li>Is your business struggling due to social distancing measures?</li>
      </ul>

      {/* <p>I'm very transparent with scope of work and cost upfront!</p> */}

      <br />
      <h3>For Agencies</h3>

      <ul>
        <li>Overloaded with clients and need to hire a contractor?</li>
        <li>Looking for someone to advise web architecture for your client(s)?</li>
        <li>Need an authentication/authorization system for a web application?</li>
        <li>Do you need help with API development? Database management?</li>
        <li>Looking to provide fast, accessible and modern websites for your clients?</li>
        <br />
        <h5 style={{ padding: '1rem 1rem 1rem 0rem' }}>
          <Link to="/contact">If you'd like to get in touch you can contact me here.</Link>
        </h5>
      </ul>

      <br />
    </Layout>
  )
}

export default WorkPage
