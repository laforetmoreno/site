import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { isMobileIOS, isMobileAndroid } from 'react-device-detect';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

import ProfilePicture from '../../static/barao-das-hashtags.png';
import '../css/global.css';
import '../css/typography.css';

const Content = styled.div`
  background-image: url('grey-paper-texture.jpg');
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 449px;
  justify-content: center;
  width: 100vw;
  min-width: 331px;
`;

const LinksList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
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
  font-family: 'Associate Sans Medium';
  letter-spacing: 0.5px;
  font-size: 15px;
  padding: 15px;
  width: 100%;
`;

const ProfilePictureImage = styled.img`
  border-radius: 50%;
  box-shadow: 0px 0px 75px -10px rgba(14,140,255,0.5);
  width: 150px;
  height: 150px;
  margin-top: 15px;
`;

const SocialNetworksList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 20px 0 0;
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

const Name = styled.h1`
  color: #444444;
  font-family: 'Associate Sans Medium';
  font-size: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 2.5px;
`;

const Username = styled.h2`
  color: #555555;
  font-family: 'Associate Sans Regular';
  font-size: 18px;
  letter-spacing: 0.5px;
  margin: 0;
  margin: 0 0 20px;
`;

const Card = styled.div`
  text-align: center;
`;

const menuLinks = [
  {
    title: 'MENTORIA ENGAJA<span style="display: inline-block; margin-left: 1px; font-size: 28px; line-height: 0; vertical-align: -3.5px; font-family: \'Associate Sans Regular\';">+</span> INSTAGRAM',
    category: 'Menu',
    url: {
      default : 'https://www.hotmart.com/product/mentoria-engaja-mais-no-instagram/T47145001A',
    },
  },
  {
    title: 'LEETAGS (APP DE HASHTAGS)',
    category: 'Menu',
    url: {
      ios: 'https://itunes.apple.com/app/leetags-relevant-hashtags/id1230168971',
      android: 'https://play.google.com/store/apps/details?id=com.leetags',
      default: 'https://www.leetags.com',
    },
  },
];

const socialNetworksLinks = [
  {
    icon: <FaInstagram color="#0E8CFF" size={25} />,
    name: 'Instagram',
    category: 'Social Networks',
    url: {
      default: 'https://www.instagram.com/baraodashashtags/',
    },
  },
  {
    icon: <FaFacebook color="#0E8CFF" size={25} />,
    name: 'Facebook',
    category: 'Social Networks',
    url: {
      default: 'https://www.facebook.com/baraodashashtags',
    },
  },
  // {
  //   icon: <FaTwitter color="#0E8CFF" size={25} />,
  //   name: 'Twitter',
  //   url: {
  //     default: 'https://twitter.com/baraodashashtags',
  //   },
  // },
];

const IndexPage = () => {
  const handleLinkClick = (link, category) => {
    let url;

    if (link.url.ios && isMobileIOS) {
      url = link.url.ios;
    } else if (link.url.android && isMobileAndroid) {
      url = link.url.android;
    } else {
      url = link.url.default;
    }

    trackCustomEvent({
      action: 'Click',
      category: link.category,
      label: url,
    });

    if (typeof window !== 'undefined') {
      if (window.fbq != null) { // Don't use ===
        window.fbq('trackCustom', 'Click Link', { url });
      }
    }

    window.open(url, '_blank');
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
        <link rel="icon" type="image/png" href="favicon.png" sizes="16x16" />
      </Helmet>
      <Content>
        <Container>
          <Card>
            <ProfilePictureImage src={ProfilePicture} alt="Claudius Ibn | Instrategista"></ProfilePictureImage>
            <Name>Claudius Ibn | Instrategista</Name>
            <Username>@baraodashashtags</Username>
            <LinksList>
              {menuLinks.map((menuLink, index) => (
                <LinksListItem key={index}>
                  <LinksListButton
                    dangerouslySetInnerHTML={{
                      __html: menuLink.title
                    }}
                    onClick={() => handleLinkClick(menuLink)}
                  >
                  </LinksListButton>
                </LinksListItem>
              ))}
            </LinksList>
            <SocialNetworksList>
              {socialNetworksLinks.map(socialNetworksLink => (
                <SocialNetworksListItem key={socialNetworksLink.name} style={{color: '#0E8CFF'}}>
                  <SocialNetworksListButton onClick={() => handleLinkClick(socialNetworksLink)}>
                    {socialNetworksLink.icon}
                  </SocialNetworksListButton>
                </SocialNetworksListItem>
              ))}
            </SocialNetworksList>
          </Card>
        </Container>
      </Content>
    </main>
  )
}

export default IndexPage
