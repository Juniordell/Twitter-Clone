import React from 'react';

import Tweet from '../Tweet';

import { Container, Tab, Tweets } from './styles';

const Feed: React.FC = () => {
  return (
      <Container>
          <Tab>Tweets</Tab>

          <Tweets>
            <Tweet 
            description="Foguete não tem ré 🚀"
            comments="18"
            retweets="18"
            likes="999"
            />
            <Tweet 
            description="Desvendando o Redux na prática!!"
            comments="25"
            retweets="12"
            likes="567"
            />
            <Tweet 
            description="React Hooks na prática!!"
            comments='10'
            retweets='8'
            likes='121'
            />
            <Tweet 
            description="Consumindo APIs no React com SWR 😎"
            comments="14"
            retweets="9"
            likes="623"
            />
            <Tweet 
            description="Navegador flutuante com ElectronJS 🔌"
            comments="43"
            retweets="39"
            likes="1312"
            />
          </Tweets>
      </Container>
  );
}

export default Feed;