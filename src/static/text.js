import * as React from 'react'

export const TEXTS = {
  MENU: {
    NAME: 'Phạm Ngọc Minh Thanh',
    TITLE: 'Frontend Developer',
  },
  HOME_PAGE: {
    HELLO: () => (
      <h1>
        Hello,
        <br /> I'm Minh Thanh.
      </h1>
    ),
    INTRO: () => (
      <p>
        A frontend developer from Ho Chi Minh City. <br />
        I'm interested in web design mockups and turning things from a draft to
        a "real".
      </p>
    ),
    WELCOME: () => (
      <>
        <a href="/experience">Checkout my working experience</a>
        <span>&#x2192;</span>
      </>
    ),
  },
  EXPERIENCE_PAGE: {
    TITLE: 'Experience',
    SUBTILE: () => (
      <>
        Below is my timeline of work experience. My main role in each project is{' '}
        <b>Frontend Developer</b>.
      </>
    ),
    RESPONSIBILITIES: 'Main responsibilites:',
    TECH_STACK: 'Tech stack:',
  },
  CONTACT_PAGE: {
    TITLE: 'CONTACT ME',
    SUBTILE: "I'm currently looking for new full-time job oppoturnities.",
  },
  RESUME_PAGE: {
    TITLE: 'Resume',
    SUBTILE: () => (
      <>
        Here is my resume.{' '}
        <a
          href="https://drive.google.com/file/d/1EfHUhBAr06WHcOocttreh44R6XRdjT9x/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Click to see.
        </a>
      </>
    ),
  },
}
