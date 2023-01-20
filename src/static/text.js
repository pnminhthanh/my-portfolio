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
    WELCOME: () => <p>Welcome to my website.</p>,
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
}
