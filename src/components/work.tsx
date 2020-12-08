import React from 'react'

export const Work = () => {
  return (
    <section className="container">
      <h1>Six12 Creative</h1>
      <blockquote>My current place of employment since June 2019</blockquote>
      <h3>My Story</h3>
      <p>
        I initially reached out to Six12 for a senior web development position. Unfortunately someone else with
        experience was hired instead - but my enthusiasm and passion for technology peaked their interest. A few weeks
        later I received a job offer for a technical support position within the company.
      </p>
      <p>
        Within my first couple weeks of handling support I was researching and developing ways to automate my workload.
        I found an intereset in a tool called Dialogflow and decided to pursue a side project of building a chatbot.
        After a few months had gone by management had become aware of my side project. I described I was using machine
        learning to train the chatbot for their contests, and that it could significantly cut down on support requests.
      </p>

      <p>
        The chatbot was trained and then brought in to production for a contest called flipthelip (which is no longer
        active). The contest was written in PHP and the chatbot was written in React and Node - so we had to bring it in
        with an iframe. It handled support for the contest very elegantly by having controlled dialogs and elevating
        more complex issues via webhooks to an excel spreadsheet.
      </p>
      <p>
        I was brought in to the dev team and started working with Node testing libraries such as Chai / Mocha to e2e
        test their content management system.
      </p>

      <h3>Rock Paper Prizes 4</h3>
      <p>
        As I was already 2 years into React development, it became apparent how valuable my frontend contrubutions were.
        I was a major influence in the company; encouraging a shift in architecture toward more JavaScript based
        frameworks such as React. At this point I was comfortable working within the company's technical stack - using
        git, encouraging best practices, helping out other developers with frontend related changes. Then came Rock
        Paper Prizes 4.
      </p>
      <p>
        Rock Paper Prizes 4 was a huge project. Past iterations of the contest were written with PHP but with my
        influence, we had decided to rewrite the contest in React!
      </p>
    </section>
  )
}
