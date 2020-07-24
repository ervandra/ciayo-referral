import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
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

const CodeContainer = styled.div`
  background: ${colors.red};
  padding: 1rem 1.5rem;
  border-radius: 0 0 8px 8px;
  display: flex;
  .code {
    flex: 1;
    line-height: 2.5rem;
    text-align: center;
    background: ${colors.white};
    border-radius: 8px 0 0 8px;
    font-weight: bold;
    font-size: ${sizes.md};
    text-transform: uppercase;
  }
  .button {
    outline: none;
    width: 96px;
    text-align: center;
    padding: 0 1rem;
    border-radius: 0 8px 8px 0%;
    background: ${colors.yellow};
    color: ${colors.white};
    line-height: 2.5rem;
    font-weight: bold;
    font-size: ${sizes.sm};
    border: none;
    .ci {
      margin-right: .5rem;
    }
    &.active {
      background: ${colors.orange};
    }
  }
`;

const CopyCode = ({ code = 'abcd1234' }) => {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 5000);
    }
  }, [copied])
  return (
    <CodeContainer>
      <div className="code">{code}</div>
      <CopyToClipboard text={code}
        onCopy={() => setCopied(true)}>
        <button className={`button ${copied ? 'active' : ''}`}><span className="icon-copy ci" />{copied ? 'Copied' : 'Copy'}</button>
      </CopyToClipboard>
      {copied && (
        <Alert>
          <span className="ci icon-copy" />
          <h5>Referral code copied!</h5>
        </Alert>
      )}
    </CodeContainer>
  )
}

export default CopyCode;