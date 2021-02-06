import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

import ProfilePicture from '../../static/barao-das-hashtags-profile-picture.png';

const Content = styled.div`
  margin: 0 auto;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

const LinksList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 10px;
`;

const LinksListItem = styled.li`
  margin-top: 10px;
  width: 300px;

  &:first-child {
    margin-top: 0;
  }
`;

const LinksListButton = styled.button.attrs({
  type: 'button',
})`
  background-color: #0E8CFF;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 20px -5px rgba(14,140,255,0.65);
  color: #ffffff;
  cursor: pointer;
  font-weight: bold;
  padding: 15px;
  width: 100%;
`;

const ProfilePictureImage = styled.img`
  border-radius: 50%;
  box-shadow: 0px 0px 75px -10px rgba(14,140,255,0.65);
  margin-bottom: 10px;
  width: 150px;
  height: 150px;
`;

const SocialNetworksList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const SocialNetworksListItem = styled.li`
  display: inline-block;
  margin: 0 5px;
`;

const SocialNetworksListButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 10px;
`;

const links = [
  {
    title: 'MENTORIA ENGAJA+ INSTAGRAM',
    url: '1',
  },
  {
    title: 'APP GERADOR DE HASHTAGS',
    url: '2',
  },
];

const socialNetworks = [
  {
    icon: <FaInstagram color="#0E8CFF" size={25} />,
    name: 'Instagram',
    url: '1',
  },
  {
    icon: <FaFacebook color="#0E8CFF" size={25} />,
    name: 'Facebook',
    url: '1',
  },
  {
    icon: <FaTwitter color="#0E8CFF" size={25} />,
    name: 'Twitter',
    url: '1',
  },
];

const IndexPage = () => {
  const handleLinkClick = (link) => {
    console.log(link);
  };

  return (
    <main>
      <Helmet>
        <title>Claudius Ibn | Instrategista</title>
        <script id="hotmart_launcher_script">
          {`(function(l,a,u,n,c,h,e,r){l['HotmartLauncherObject']=c;l[c]=l[c]||function(){
            (l[c].q=l[c].q||[]).push(arguments)},l[c].l=1*new Date();h=a.createElement(u),
            e=a.getElementsByTagName(u)[0];h.async=1;h.src=n;e.parentNode.insertBefore(h,e)
            })(window,document,'script','//launcher.hotmart.com/launcher.js','hot');
            hot('account','180c77e4-ed85-351c-bcf6-2e1ac9abe717');`}
        </script>
        {/* eslint-disable-next-line react/style-prop-object */}
        <body style="margin: 0; background-image: url('grey-paper-texture.jpg');"></body>
      </Helmet>
      <Content>
        <Container>
          <ProfilePictureImage src={ProfilePicture} alt="Claudius Ibn | Instrategista"></ProfilePictureImage>
          <LinksList>
            {links.map((link, index) => (
              <LinksListItem key={index}>
                <LinksListButton onClick={() => handleLinkClick(link)}>
                  {link.title}
                </LinksListButton>
              </LinksListItem>
            ))}
          </LinksList>
          <SocialNetworksList>
            {socialNetworks.map(socialNetwork => (
              <SocialNetworksListItem key={socialNetwork.name} style={{color: '#0E8CFF'}}>
                <SocialNetworksListButton onClick={() => handleLinkClick(socialNetwork)}>
                  {socialNetwork.icon}
                </SocialNetworksListButton>
              </SocialNetworksListItem>
            ))}
          </SocialNetworksList>
        </Container>
        <p>Lorem ipsum.</p>
      </Content>
    </main>
  )
}

export default IndexPage
