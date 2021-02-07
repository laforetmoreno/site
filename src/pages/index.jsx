import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { isIOS, isAndroid, isMobile } from 'react-device-detect';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
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
  min-width: 311px;
`;

const LinksList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
`;

const LinksListItem = styled.li`
  margin-top: 10px;
  width: 310px;

  &:first-child {
    margin-top: 0;
  }
`;

const LinksListButton = styled.button.attrs({
  type: 'button',
})`
  background-color: #0E8CFF;
  border: 3px solid #0E8CFF;
  border-radius: 5px;
  box-shadow: 0px 0px 20px -5px rgba(14,140,255,0.65);
  color: #ffffff;
  cursor: pointer;
  font-family: 'Associate Sans Medium', Helvetica, sans-serif;
  letter-spacing: 0.5px;
  font-size: 17px;
  padding: 12px;
  transition: color 0.2s ease;
  transition: background-color 0.2s ease;
  width: 100%;

  &:hover, &:active {
    background-color: transparent;
    color: #0E8CFF;
  }

  &:focus {
    outline: none;
  }
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

  &:hover {
    position: relative;
    top: -2px;
  }

  &:focus {
    outline: none;
  }
`;

const Name = styled.h1`
  color: #444444;
  font-family: 'Associate Sans Medium', Helvetica, sans-serif;
  font-size: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 2.5px;
`;

const Username = styled.h2`
  color: #555555;
  font-family: 'Associate Sans Regular', Helvetica, sans-serif;
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
    title: 'MENTORIA ENGAJA<span style="display: inline-block; margin-left: 1px; font-size: 24px; line-height: 0; vertical-align: 0px; font-family: \'Associate Sans Regular, Helvetica, sans-serif\';">+</span> INSTAGRAM',
    category: 'Menu',
    target: '_blank',
    url: {
      default : 'https://www.hotmart.com/product/mentoria-engaja-mais-no-instagram/T47145001A',
    },
  },
  {
    title: 'ENTRAR NO GRUPO DO TELEGRAM',
    category: 'Menu',
    target: '_blank',
    url: {
      default: 'https://t.me/joinchat/Hx2oHJd_Q_4_ncjP',
    },
  },
  {
    title: 'LEETAGS - APP DE HASHTAGS',
    category: 'Menu',
    target: '_blank',
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
    target: '_blank',
    url: {
      default: 'https://www.instagram.com/baraodashashtags/',
    },
  },
  {
    icon: <FaFacebook color="#0E8CFF" size={25} />,
    name: 'Facebook',
    category: 'Social Networks',
    target: '_blank',
    url: {
      default: 'https://www.facebook.com/baraodashashtags',
    },
  },
  {
    icon: <FaWhatsapp color="#0E8CFF" size={25} />,
    name: 'WhatsApp',
    target: '_blank',
    url: {
      default: 'https://api.whatsapp.com/send?phone=5521998584535&text=Oi!',
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

  return (
    <main>
      <Helmet
        htmlAttributes={{ lang: 'pt' }}
        title="Claudius Ibn | Instrategista"
        meta={[
          {
            property: `title`,
            content: `Claudius Ibn | Instrategista`,
          },
          {
            name: `description`,
            content: `Dicas para Instagram.`,
          },
          {
            property: `og:url`,
            content: `https://baraodashashtags.com`,
          },
          {
            property: `og:title`,
            content: `Claudius Ibn | Instrategista`,
          },
          {
            property: `og:description`,
            content: `Dicas para Instagram.`,
          },
          {
            property: `og:image`,
            content: `https://baraodashashtags.com/barao-das-hashtags-large.png`,
          },
          {
            property: `og:image:width`,
            content: `600`,
          },
          {
            property: `og:image:height`,
            content: `600`,
          },
          {
            property: `og:image:alt`,
            content: `Claudius Ibn | Instrategista`,
          },
          {
            name: `twitter:title`,
            content: `Claudius Ibn | Instrategista`,
          },
          {
            name: `twitter:description`,
            content: `Dicas para Instagram.`,
          },
          {
            property: `twitter:image`,
            content: `https://baraodashashtags.com/barao-das-hashtags-large.png`,
          },
          {
            property: `twitter:image:alt`,
            content: `Claudius Ibn | Instrategista`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
        ]}
        link={[
          { rel: 'icon', type: 'image/png', href: `favicon.png` },
        ]}
        script={[
          {
            type: 'text/javascript',
            innerHTML: `(function(l,a,u,n,c,h,e,r){l['HotmartLauncherObject']=c;l[c]=l[c]||function(){
              (l[c].q=l[c].q||[]).push(arguments)},l[c].l=1*new Date();h=a.createElement(u),
              e=a.getElementsByTagName(u)[0];h.async=1;h.src=n;e.parentNode.insertBefore(h,e)
              })(window,document,'script','//launcher.hotmart.com/launcher.js','hot');
              hot('account','180c77e4-ed85-351c-bcf6-2e1ac9abe717');`
          }
        ]}
        >
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
