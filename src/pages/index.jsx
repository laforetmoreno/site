import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { isIOS, isAndroid, isMobile } from 'react-device-detect';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import { Shake } from 'reshake';

import ProfilePicture from '../../static/moreno.jpg';
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
  min-width: 330px;
`;

const LinksList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
`;

const LinksListItem = styled.li`
  margin-top: 10px;
  width: 330px;

  &:first-child {
    margin-top: 0;
  }
`;

const LinksListButton = styled.button.attrs({
  type: 'button',
})`
  background-color: ${props => (props.highlight ? '#000000' : '#0E8CFF')};
  border: 3px solid ${props => (props.highlight ? '#000000' : '#0E8CFF')};
  border-radius: 5px;
  box-shadow: 0px 0px 20px -5px ${props => (props.highlight ? 'rgba(0, 0, 0, 0.65)' : 'rgba(14, 140, 255, 0.65)')};
  color: #ffffff;
  cursor: pointer;
  font-family: 'Associate Sans Medium';
  letter-spacing: 0.5px;
  font-size: 14px;
  padding: 12px;
  transition: color 0.2s ease;
  transition: background-color 0.2s ease;
  width: 100%;

  &:hover, &:active {
    background-color: transparent;
    color: ${props => (props.highlight ? '#000000' : '#0E8CFF')};
  }

  &:focus {
    outline: none;
  }
`;

const ProfilePictureImage = styled.img`
  border-radius: 50%;
  box-shadow: 0px 0px 75px -10px rgba(14,140,255,0.8);
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

  &:hover {
    position: relative;
    top: -2px;
  }

  &:focus {
    outline: none;
  }
`;

const Name = styled.h1`
  color: #222222;
  font-family: 'Associate Sans Medium';
  font-size: 18px;
  letter-spacing: 0.5px;
  margin: 15px 0 2.5px;
`;

const Username = styled.h2`
  color: #555555;
  font-family: 'Associate Sans Regular';
  font-size: 16px;
  letter-spacing: 0.5px;
  margin: 0;
  margin: 0 0 20px;
`;

const Card = styled.div`
  text-align: center;
`;

const menuLinks = [
  {
    title: 'Github',
    category: 'Menu',
    target: '_blank',
    highlight: false,
    url: {
      default: 'https://github.com/laforetmoreno',
    },
  },
  {
    title: 'Linkedin',
    category: 'Menu',
    target: '_blank',
    highlight: false,
    url: {
      default: 'https://www.linkedin.com/in/moreno-andrade/',
    },
  },
];

const socialNetworksLinks = [
  {
    icon: <FaInstagram color="#0E8CFF" size={25} />,
    name: 'Instagram',
    category: 'Social Networks',
    target: '_blank',
    url: {
      default: 'https://www.instagram.com/laforetmoreno/',
    },
  },
  {
    icon: <FaFacebook color="#0E8CFF" size={25} />,
    name: 'Facebook',
    category: 'Social Networks',
    target: '_blank',
    url: {
      default: 'https://www.facebook.com/laforetmoreno/',
    },
  },
  {
    icon: <FaWhatsapp color="#0E8CFF" size={25} />,
    name: 'WhatsApp',
    target: '_blank',
    url: {
      default: 'https://api.whatsapp.com/send?phone=5521994156023&text=Oi!',
    },
  },
];

const IndexPage = () => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log(123);
  //   }, 5000);
  // }, []);

  const handleLinkClick = (link) => {
    let url;

    if (link.url.ios && isIOS && isMobile) {
      url = link.url.ios;
    } else if (link.url.android && isAndroid && isMobile) {
      url = link.url.android;
    } else {
      url = link.url.default;
    }

    if (typeof window !== 'undefined') {
      trackCustomEvent({
        action: 'Click',
        category: link.category,
        label: url,
      });

      if (window.fbq != null) { // Don't use ===
        window.fbq('trackCustom', 'ClickLink', { url, category: link.category });
      }

      window.open(url, link.target, 'noopener noreferrer');
    }
  };

  const renderLinksListButton = (menuLink) =>
    <LinksListButton highlight={menuLink.highlight}
      dangerouslySetInnerHTML={{
        __html: menuLink.title
      }}
      onClick={() => handleLinkClick(menuLink)}
    >
    </LinksListButton>;

  return (
    <main>
      <Helmet
        htmlAttributes={{ lang: 'pt' }}
        title="Moreno Andrade | Software Engineer"
        meta={[
          {
            property: `title`,
            content: "Moreno Andrade | Software Engineer",
          },
          {
            name: `description`,
            content: "Moreno Andrade | Software Engineer",
          },
          {
            property: `og:url`,
            content: `https://morenolaforet.dev/`,
          },
          {
            property: `og:title`,
            content: "Moreno Andrade | Software Engineer",
          },
          {
            property: `og:description`,
            content: "Moreno Andrade | Software Engineer",
          },
          {
            property: `og:image:width`,
            content: `600`,
          },
          {
            property: `og:image:height`,
            content: `600`,
          },
        ]}
        link={[
          { rel: 'icon', type: 'image/png', href: `favicon.png` },
        ]}
        script={[
        ]}
        >
      </Helmet>
      <Content>
        <Container>
          <Card>
            <ProfilePictureImage src={ProfilePicture} alt="Moreno Andrade | Software Engineer"></ProfilePictureImage>
            <Name>Moreno Andrade</Name>
            <Username>@laforetmoreno</Username>
            <LinksList>
              {menuLinks.map((menuLink, index) => (
                <LinksListItem key={index}>
                  {menuLink.highlight ? <Shake
                    h={3}
                    v={3}
                    r={3}
                    dur={300}
                    int={25}
                    max={100}
                    fixed={true}
                    fixedStop={true}
                    freez={true}
                  >
                    {renderLinksListButton(menuLink)}
                  </Shake> : renderLinksListButton(menuLink)}
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
