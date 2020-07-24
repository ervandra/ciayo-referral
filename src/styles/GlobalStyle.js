import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import FontFaces from './fonts';
import TransitionStyles from './TransitionStyles';
const { colors, sizes, fonts } = theme;

const GlobalStyle = createGlobalStyle`
  ${FontFaces};

  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: #ffffff;
    color: ${colors.body};
    line-height: 1.5;
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    &.hidden {
      overflow: hidden;
    }
    &.blur {
      overflow: hidden;
      #root > #content > * {
        filter: blur(5px) brightness(0.7);
        transition: ${theme.transition};
        pointer-events: none;
        user-select: none;
      }
    }
  }

  ::selection {
    background-color: ${colors.yellow};
    color: ${colors.white};
    fill: ${colors.white}
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
    color: ${colors.body};
    margin: 0 0 1rem 0;
  }

  img {
    max-width: 100%;
    vertical-align: middle;
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
  }

  a {
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: ${colors.orange};
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${colors.orange};
      text-decoration: underline;
    }
  }

  input, textarea {
    border-radius: 0;
    outline: 0;
    display: block;

    &:focus {
      outline: 0;
    }
    &::placeholder {
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  p, ul li, ol li {
    font-size: ${sizes.md};
    line-height: 1.5;
  }

  hr {
    background-color: ${colors.copy};
    height: 1px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    margin: 1rem;
  }

  ${TransitionStyles};
`;

export default GlobalStyle;
