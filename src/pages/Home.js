import React, { useState, useEffect } from 'react';
import Page from '../components/global/Page';
import Banner from '../components/atom/Banner';
import CopyCode from '../components/atom/CopyCode';
import Content from '../components/atom/Content';
import UserInfo from '../components/atom/UserInfo';
import MyRewards from '../components/organism/MyRewards';
import MyDigitalRewards from '../components/organism/MyDigitalRewards';
import styled from 'styled-components';
import Axios from 'axios';
import { useCookies } from 'react-cookie';
import { theme, mixins, media } from '../styles';
const { sizes, colors } = theme;

const Home = () => {
  const [cookies] = useCookies(['token']);
  const [activeTab, setActiveTab] = useState(0);
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  useEffect(() => {
    const getUser = async (token) => {
      setError(false);
      setLoading(true);
      try {
        const result = await Axios.get('https://comet-api.ciayo.com/3.3/users/profile?app=mobile&language=id', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (result.status === 200) {
          if (result.data && result.data.c.data) {
            setUser(result.data.c.data);
          } else {
            setError(true);
          }
        } else {
          setError(true);
        }
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    }
    if (!user && cookies && cookies.token) {
      getUser(cookies.token);
    }
  }, [cookies, user])

  return (
    <Page>
      <TabHeader className={isLoading ? 'fadedown-enter' : 'fadedown-enter-active'}>
        <ul className={`active-${activeTab}`}>
          <li className={activeTab === 0 ? 'active' : ''} onClick={() => setActiveTab(0)}>Event</li>
          <li className={activeTab === 1 ? 'active' : ''} onClick={() => setActiveTab(1)}>My Info</li>
        </ul>
      </TabHeader>
      <TabContent className={isLoading ? 'fadeup-enter' : 'fadeup-enter-active'}>
        {activeTab === 0 ? (
          <div className="tab-content">
            <BannerContainer>
              <Banner />
              <CopyCode />
            </BannerContainer>
            <Content />
          </div>
        ) : (
            <div className="tab-content">
              {user && (
                <UserInfo user={user} />
              )}
              <MyRewards />
              <MyDigitalRewards />
            </div>
          )}
      </TabContent>
    </Page>
  )
}

export default Home;

const TabHeader = styled.div`
  border-bottom: 1px solid ${colors.border};
  ul {
    ${mixins.flexBetween};
    margin: 0;
    padding: 0;
    position: relative;
    overflow: hidden;
    li {
      flex: 1;
      text-align: center;
      display: block;
      line-height: 50px;
      color: ${colors.copy};
      font-weight: bold;
      text-transform:uppercase;
      font-size: ${sizes.xs};
      position: relative;
      z-index: 5;
      cursor: pointer;
      transition: ${theme.transition};
      &.active {
        color: ${colors.brand};
        border-bottom-color: ${colors.brand};
      }
    }
    &:after {
      position: absolute;
      bottom: 0;
      display: block;
      content: '';
      height: 4px;
      width: 50%;
      background: ${colors.brand};
      transition: ${theme.transition};
      z-index: 4;
    }
    &.active-1 {
      &:after {
        margin-left: 50%;
      }
    }
  }
`;

const TabContent = styled.div`
  position: relative;
`;

const BannerContainer = styled.div`
  position: relative;
  padding: 1rem;
`;