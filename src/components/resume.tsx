import React from 'react'
import styled from 'styled-components'

const StyledResume = styled.section`
  h1,
  h2,
  h3,
  h5,
  h5,
  p,
  small {
    margin-bottom: 0;
    margin-left: 0;
    margin-top: 1rem;
    padding: 0.5rem;
  }
`

export const Resume = () => {
  return (
    <StyledResume>
      <header>
        <h1>Jackson Malloy</h1>
        <div>
          <small>Vancouver, BC </small>
          <small>Jacksmalloy@gmail.com </small>
          <small>604-505-9772</small>
        </div>
      </header>
      <main>
        <h5>SUMMARY</h5>
        <p>Full stack developer specializing in JavaScript Architecture for end-to-end business solutions.</p>
        <h5>WORK EXPERIENCE</h5>
        <div>
          <p>Web Developer | Six12Creative | New West BC</p>
          <p>
            <h5>Major Contributor - RockPaperPrizes 4</h5>
            Developed features such as UserStats, Video Controls (YouTube API), PayItForward/Gifting in a Kanban, Scrum
            style environment using tools such as ReactJS, Node + Express, and Github for version control.
          </p>
          <p>
            <h5>Developer - CKChatbot</h5>
            Led the development of a conversational, machine learning chatbot utilizing ReactJS + NodeJS. The chatbot
            handled FAQ style questions and interacted with the Google Spreadsheet API and sendgrid to automate handling
            customer complaints for FlipTheLip.
          </p>
          <p>
            <h5>Developer - CircleKWestGolf</h5>
            Developed the Circle K West’s Charity Golf Tournament website using a headless Gatsby + WordPress stack.
          </p>
        </div>
        <h5>EDUCATION</h5>
        <p>Bachelor of Business Administration - Capilano University, North Vancouver BC</p>{' '}
        <small> Completed December 2018</small>
        <p>Wes Bos – AdvancedReact.com </p> <small>Completed January 2020</small>
        <p>Wes Bos – BeginnerJavascript.com </p>
        <small>Completed February 2020</small>
        <p>Udemy - MERN Stack Front to Back Certification of Completion</p>
        <small> Completed June 2019</small>
        <p>Udemy - JavaScript: Understanding the Weird Parts </p>
        <small> Completed February 2018</small>
      </main>

      <footer>
        <h5>OTHER INTERESTS</h5>
        <p>Member of the Burnaby Metro Athletic Tigers football club in the Vancouver Metro Soccer League.</p>
        <p>Music teacher and producer with a love for guitar and piano at moonmelt.</p>
      </footer>
    </StyledResume>
  )
}
