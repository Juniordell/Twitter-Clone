import React, { useState } from 'react';

import Lottie from 'react-lottie';

import animationData from '../../assets/like.json';

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  Button,
} from './styles';

interface Props {
  comments: string;
  retweets: string;
  likes: string;
  description: string;
}

const Tweet: React.FC<Props> = ({ comments, retweets, likes, description }) => {
  const [liked, setLiked] = useState(false);

  const [animationState, setAnimationState] = useState({
    isStopped: true,
    isPaused: false,
    direction: -1,
  });

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

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
              <Button
                onClick={() => {
                  setLiked(!liked);

                  const reverseAnimation = -1;
                  const normalAnimation = 1;
                  setAnimationState({
                    ...animationState,
                    isStopped: false,
                    direction:
                      animationState.direction === normalAnimation
                        ? reverseAnimation
                        : normalAnimation,
                  });
                }}
              >
                <div className="anime">
                  <Lottie
                    options={defaultOptions}
                    height={120}
                    width={120}
                    direction={animationState.direction}
                    isStopped={animationState.isStopped}
                    isPaused={animationState.isPaused}
                  />
                  <span style={{ color: liked ? '#a51b43' : '#aabac1' }}>
                    {(likes = liked ? (Number(likes) + 1).toString() : likes)}
                  </span>
                </div>
              </Button>
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
