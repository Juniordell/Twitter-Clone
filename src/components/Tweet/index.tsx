import React from 'react';

import { Container, Retweeted, RocketseatIcon, Body, Avatar, Content, Header, Dot, Description, ImageContent, Icons, Status, CommentIcon, RetweetIcon, LikeIcon } from './styles';

interface Props {
    comments: string;
    retweets: string;
    likes: string;
    description: string
}

const Tweet: React.FC<Props> = ({
    comments, retweets, likes, description
}) => {
  return (
      <Container>
          <Retweeted>
              <RocketseatIcon />
              Você retweetou
          </Retweeted>

          <Body>
              <Avatar />

              <Content>
                  <Header>
                      <strong>Rocketseat</strong>
                      <span>@rocketseat</span>
                      <Dot />
                      <time>27 de jun</time>
                  </Header>

                  {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                  <Description>{description}</Description>

                  <ImageContent />

                  <Icons>
                      <Status>
                          <CommentIcon />
                          {comments}
                      </Status>
                      <Status>
                          <RetweetIcon />
                          {retweets}
                      </Status>
                      <Status>
                          <LikeIcon />
                          {likes}
                      </Status>
                  </Icons>
              </Content>
          </Body>
      </Container>
  );
}

export default Tweet;