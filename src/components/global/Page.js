import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../../styles';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
  margin: 0 auto;
  width: 100%;
`;

const Page = ({ children }) => {
  return (
    <StyledContent>
      <GlobalStyle />
      {children}
    </StyledContent>
  )
}

export default Page;