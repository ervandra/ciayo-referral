import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { theme } from '../../styles';

const { sizes, colors } = theme;

const Alert = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(25,150,25, .89);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  padding: 0 1rem;
  line-height: 32px;
  border-bottom: 1px solid ${colors.border};
  .ci {
    margin-right: .5rem;
    font-size: 16px;
    color: white;
  }
  h5 {
    color: ${colors.white};
    font-size: 12px;
    font-weight: normal;
    margin: 0;
  }
`;

const UserContainer = styled.div`
  background: #f0f0f0;
  padding: 1.5rem 1rem;
  display: flex;
  align-items: center;
  overflow: hidden;
  margin-bottom: 1rem;
  .user-avatar {
    position: relative;
    margin-right: 1rem;
    img {
      width: 60px;
      height: 60px;
      margin: 6px;
      display: block;
      border-radius: 50%;
      &.avatar-border {
        border-radius: 0;
        width: 72px;
        height: 72px;
        margin: 0;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
  .user-info {
    h4 {
      font-size: ${sizes.md};
    }
  }
  .button {
    outline: none;
    text-align: center;
    padding: 0 1rem;
    border-radius: 8px;
    background: ${colors.yellow};
    color: ${colors.white};
    line-height: 2.25rem;
    font-weight: bold;
    font-size: ${sizes.md};
    text-transform: uppercase;
    border: none;
    .ci {
      margin-left: .5rem;
    }
    &.active {
      background: ${colors.orange}
    }
  }
`;

const UserInfo = ({ code = 'abcd1234', user = null }) => {
  const [copied, setCopied] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 5000);
    }
  }, [copied])
  return (
    <TransitionGroup>
      {isMounted && (
        <CSSTransition classNames="fadeup" timeout={300}>
          <UserContainer>
            {copied && (
              <Alert>
                <span className="ci icon-copy" />
                <h5>Referral code copied!</h5>
              </Alert>
            )}
            <div className="user-avatar">
              <img src={user.avatar} alt={user.display_name} className="avatar" />
              <img src={user.avatar_border} alt="" className="avatar-border" />
            </div>
            <div className="user-info">
              <h4>{user.display_name}</h4>
              <CopyToClipboard text={code}
                onCopy={() => setCopied(true)}>
                <button className={`button ${copied ? 'active' : ''}`}>{code} <span className="ci icon-copy" /></button>
              </CopyToClipboard>
            </div>
          </UserContainer>
        </CSSTransition>
      )}
    </TransitionGroup>
  )
}

export default UserInfo;