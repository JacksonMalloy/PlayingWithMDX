import React from 'react'
import { ExternalLink } from './externalLink'

export const Work = () => {
  return (
    <section className="container">
      <h1>SIX12 Creative</h1>
      <h4>June 2019 - present</h4>
      <blockquote>SIX12 is a full service marketing and design agency. </blockquote>

      <h5>Full Stack Web Development</h5>
      <p>
        As a web developer at <ExternalLink to={'https://six12creative.com/'}>SIX12 Creative</ExternalLink> I have been
        incredibly successful at infuencing technical decisions. I routinely advocate for progressive technological
        paradigms which has led to the company embracing more JavaScript, specifically React. In my capacity as a full
        stack web developer I have led the development of the front-end React &{' '}
        <ExternalLink to={'https://nextjs.org/'}>Next.js</ExternalLink> architecture for client contests such as Rock
        Paper Prizes 4, Drink. Snack. Score. , and 31 Days Of Circle K. These are managed prize-based contest systems
        that reach millions of users in Canada and the United States.
      </p>

      <h5>Individual Projects</h5>
      <p>
        Smaller client projects of which I was a sole developer include{' '}
        <ExternalLink to={'https://circlekwestgolf.com/'}>Circle K West Charity Golf Tournament</ExternalLink>,{' '}
        <ExternalLink to={'https://viranifoundation.ca/'}>The Virani Foundation</ExternalLink>, and in my earlier days,
        a WordPress site called <ExternalLink to={'https://sunblest.ca/'}>Sunblest</ExternalLink>. I was actually an
        early adopter of <ExternalLink to={'https://www.wpgraphql.com/'}>WPGraphQL</ExternalLink>; a free, open-source
        WordPress plugin that provides an extendable GraphQL schema and API for any WordPress site. The Circle K West
        Charity Golf Tournament website is built with{' '}
        <ExternalLink to={'https://gatsbyjs.org/'}>Gatsby.js</ExternalLink> powered by a WPGraphQL schema.
      </p>

      {/* <p>The comeback SMS project was a node script</p> */}

      <h5>Other responsibilities</h5>

      <p>
        Aside from web development, other responsibilities have included reporting on Google Analytics data, leading the
        support team for company run contests and helping with logistical problems such as grand prize fulfillment.
      </p>
    </section>
  )
}
