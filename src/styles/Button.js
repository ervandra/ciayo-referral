import styled from 'styled-components';
import theme from './theme';
const { colors, sizes, fonts } = theme;

const Button = styled.button`
  color: ${colors.orange};
  background-color: transparent;
  border: 1px solid ${colors.orange};
  border-radius: ${theme.borderRadius};
  font-size: ${sizes.smish};
  font-family: ${fonts.SFMono};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${theme.transition};
  padding: 1.25rem 1.75rem;

  &:hover,
  &:focus,
  &:active {
    background-color: ${colors.orange};
    outline: none;
  }
  &:after {
    display: none !important;
  }
`;

export default Button;
