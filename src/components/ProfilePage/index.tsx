import React from 'react';

import Feed from '../Feed'

import { Container, EditButton, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage } from './styles';

const ProfilePage: React.FC = () => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>

            <ProfileData>
                <EditButton outlined>Editar perfil</EditButton>
          
                <h1>Nelson Junior</h1>
                <h2>@junior_dell</h2>

                <p>
                    Developer at <a href="https://rocketseat.com.br">@Rocketseat</a>
                </p>

                <ul>
                    <li>
                        <LocationIcon />
                        Rio Grande do Sul, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido(a) em 05 de junho de 2002
                    </li>
                </ul>

                <Followage>
                    <span>
                        Seguindo <strong>94</strong>
                    </span>
                    <span>
                        <strong>672 </strong> seguidores
                    </span>
                </Followage>
            </ProfileData>

            <Feed />
        </Container>
  )
}

export default ProfilePage;