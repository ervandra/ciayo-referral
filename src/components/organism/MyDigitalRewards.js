import React, { useState, useEffect } from 'react';
import MyVoucher from '../molecule/MyVoucher';
import AllRewards from '../molecule/AllRewards';
import Winners from '../molecule/Winners';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { theme } from '../../styles';

const { colors } = theme;

const MyDigitalRewardsContainer = styled.div`
  position: relative;
  padding: 1rem 0;
  border-top: 1px solid ${colors.border};
  h3 {
    padding: 0 1rem;
  }
`;

const MyDigitalRewards = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (

    <TransitionGroup component={null}>
      {isMounted && (
        <CSSTransition key={0} classNames="fadedown" timeout={10}>
          <MyDigitalRewardsContainer>
            <h3>Digital Rewards</h3>
          </MyDigitalRewardsContainer>
        </CSSTransition>
      )}
    </TransitionGroup>
  )
}

export default MyDigitalRewards;