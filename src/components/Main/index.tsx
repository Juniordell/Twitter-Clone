import React from 'react';

import { Container, Header, BackIcon, ProfileInfo, BottonMenu, HomeIcon, SearchIcon, EmailIcon, BellIcon } from './styles';

const Main: React.FC = () => {
  return (
      <Container>
          <Header>
              <button>
                  <BackIcon />
              </button>

              <ProfileInfo>
                  <strong>Nelson Junior</strong>
                  <span>612 Tweets</span>
              </ProfileInfo>
          </Header>

          {/* <ProfilePage /> */}

          <BottonMenu>
              <HomeIcon />
              <SearchIcon />
              <BellIcon />
              <EmailIcon /> 
          </BottonMenu>
      </Container>
  );
}

export default Main;