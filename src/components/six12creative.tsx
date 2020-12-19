import React from 'react'
import { ExternalLink } from './externalLink'
import { SoloStream } from './six12creative/SoloStream'
import { TeamStream } from './six12creative/TeamStream'

export const Six12creative = () => {
  return (
    <section className="container">
      <h1>SIX12 Creative</h1>

      <blockquote>SIX12 is a full service marketing and design agency. </blockquote>

      <h5>Full Stack Web Development</h5>
      <p>
        At <ExternalLink to={'https://six12creative.com/'}>SIX12 Creative</ExternalLink> I am part of a team of
        developers building and managing promotional SMS systems. These systems primarily serve Circle K by driving foot
        traffic to brick and morter locations through coupon & rewards programs. I have been incredibly successful at
        infuencing technical decisions at the company. I routinely advocate for progressive ideas which has influenced
        the company to embrace more JavaScript, specifically React and{' '}
        <ExternalLink to={'https://nextjs.org/'}>Next.js</ExternalLink>. In my capacity as a full stack web developer I
        have led the development of the front-end React & Next.js architecture for client contests such as Rock Paper
        Prizes 4, Drink. Snack. Score. , and 31 Days Of Circle K. These are managed promotional systems that reach
        millions of users in Canada and the United States.
      </p>

      <TeamStream />

      <h5>Individual Projects</h5>
      <p>
        Smaller client projects of which I was a sole developer include{' '}
        <ExternalLink to={'https://circlekwestgolf.com/'}>Circle K West Charity Golf Tournament</ExternalLink>,{' '}
        <ExternalLink to={'https://viranifoundation.ca/'}>The Virani Foundation</ExternalLink>, and in my earlier days,
        a WordPress site called <ExternalLink to={'https://sunblest.ca/'}>Sunblest</ExternalLink>. I was an early
        adopter of <ExternalLink to={'https://www.wpgraphql.com/'}>WPGraphQL</ExternalLink>; a free, open-source
        WordPress plugin that provides an extendable GraphQL schema and API for any WordPress site. The Circle K West
        Charity Golf Tournament website is built with{' '}
        <ExternalLink to={'https://gatsbyjs.org/'}>Gatsby.js</ExternalLink> powered by a WPGraphQL schema.
      </p>

      <SoloStream />

      <h5>Other responsibilities</h5>
      <p>
        Other responsibilities have included reporting on Google Analytics data, leading the support team for company
        run contests and helping with logistical problems such as grand prize fulfillment.
      </p>
    </section>
  )
}
