import {
  FaFacebookSquare,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from 'react-icons/fa';

import {
  Container,
  LogoContainer,
  Navigation,
  SocialMedias,
  SubContainer,
} from './styles';

export function Footer() {
  return (
    <Container>
      <SubContainer>
        <LogoContainer>
          <span>Shortly</span>
        </LogoContainer>
        <Navigation>
          <div>
            <b>Features</b>
            <ul>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analystics</li>
            </ul>
          </div>
          <div>
            <b>Resources</b>
            <ul>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <b>Company</b>
            <ul>
              <li>About</li>
              <li>Our team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </Navigation>
        <SocialMedias>
          <ul>
            <li>
              <FaFacebookSquare size={25} />
            </li>
            <li>
              <FaTwitter size={25} />
            </li>
            <li>
              <FaPinterest size={25} />
            </li>
            <li>
              <FaInstagram size={25} />
            </li>
          </ul>
        </SocialMedias>
      </SubContainer>
    </Container>
  );
}
