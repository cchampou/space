import React from 'react';
import { Global, css } from '@emotion/react';

const globalStyles = css`
  body {
    margin: 0;
    color: white;
    font-family: "Helvetica", sans-serif;
    background-color: black;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100%;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: lighter;
    letter-spacing: 0.3rem;
  }
`;

const App = () => (
  <>
    <Global styles={globalStyles} />
    <h1>Hello world</h1>
  </>
);

export default App;
