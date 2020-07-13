import React, { useState } from 'react';

import { Container, Avatar, Info, FollowButton } from './styles';

interface Props {
    name: string;
    nickname: string
}

const FollowSuggestion: React.FC<Props> = ({
    name,
    nickname
}) => {
    
    const [follow, setFollow] = useState(false)

    function followTrue() {
        setFollow(true)
    }

    function followFalse() {
        setFollow(false)
    }

    return (
        <Container>
            <div>
                <Avatar />

                <Info>
                    <strong>{name}</strong>
                    <span>{nickname}</span>
                </Info>
            </div>
            { follow && 
                <FollowButton onClick={followFalse}>Seguindo</FollowButton> 
            }

            { !follow && 
                <FollowButton outlined onClick={followTrue}>Seguir</FollowButton> 
            }

        </Container>
  );
}

export default FollowSuggestion;