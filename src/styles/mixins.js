import { css } from 'styled-components';
import theme from './theme';
const { colors, sizes, fonts } = theme;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    color: ${colors.orange};
    &:hover,
    &:focus,
    &:active {
      color: ${colors.orange};
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: ${colors.orange} !important;
        transition: ${theme.transition};
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: ${colors.orange};
      transition: ${theme.transition};
      opacity: 0.5;
    }
  `,

  smallButton: css`
    color: ${colors.orange};
    background-color: transparent;
    border: 1px solid ${colors.orange};
    border-radius: ${theme.borderRadius};
    padding: 0.75rem 1rem;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    &:hover,
    &:focus,
    &:active {
      background-color: ${colors.transorange};
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: ${colors.orange};
    background-color: transparent;
    border: 1px solid ${colors.orange};
    border-radius: ${theme.borderRadius};
    padding: 1.25rem 1.75rem;
    font-size: ${sizes.sm};
    font-family: ${fonts.SFMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    &:hover,
    &:focus,
    &:active {
      background-color: ${colors.transorange};
    }
    &:after {
      display: none !important;
    }
  `,

  boxShadow: css`
    box-shadow: 0 10px 30px -15px ${colors.shadowNavy};
    transition: ${theme.transition};
    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px ${colors.shadowNavy};
    }
  `,
};

export default mixins;
