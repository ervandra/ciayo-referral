import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MyVoucher from '../molecule/MyVoucher';
import AllRewards from '../molecule/AllRewards';
import Winners from '../molecule/Winners';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const MyRewardsContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

const MyRewards = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const one = () => (
    <MyVoucher />
  );
  const two = () => (
    <div style={{ transitionDelay: '100ms' }}>
      <AllRewards />
    </div>
  );
  const three = () => (
    <div style={{ transitionDelay: '200ms' }}>
      <Winners />
    </div>
  );

  const items = [one, two, three];
  return (
    <MyRewardsContainer>
      <TransitionGroup component={null}>
        {isMounted && items.map((item, i) => (
          <CSSTransition key={i} classNames="fadedown" timeout={10}>
            {item}
          </CSSTransition>
        ))}
      </TransitionGroup>
    </MyRewardsContainer>
  )
}

export default MyRewards;