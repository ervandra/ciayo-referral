import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'styled-react-modal';
import { theme } from '../../styles';

const { sizes, colors } = theme;

const ModalStyle = Modal.styled`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  overflow-y: auto;
  background: #ffffff;
  padding: 1rem;
  .btn-close {
    display: block;
    position: absolute;
    top: .5rem;
    right: .5rem;
    font-size: ${sizes.h3};
    color: ${colors.copy};
    width: 2rem;
    height: 2rem;
    text-align: center;
    line-height: 2rem;
    border: none;
    background: none;
    padding: 0;
  }
`;

const AllRewardsContainer = styled.div`
  position: relative;
  h5 {
    margin: 0;
    padding: 0 1rem;
    line-height: 60px;
    font-size: ${sizes.sm};
    transition: ${theme.transition};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      color: ${colors.brand};
    }
  }
`;

const AllRewards = ({ data = [] }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <AllRewardsContainer>
      <h5 onClick={() => setOpen(true)}>See All Rewards</h5>
      <ModalStyle
        isOpen={isOpen}
        onBackgroundClick={() => setOpen(false)}
        onEscapeKeydown={() => setOpen(false)}
      >
        <p>All rewards here</p>
        <button className="btn-close" onClick={() => setOpen(false)}>
          &times;
        </button>
      </ModalStyle>
    </AllRewardsContainer>
  )
}

export default AllRewards;