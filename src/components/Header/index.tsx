import { VscChromeClose } from 'react-icons/vsc';
import { FiMenu } from 'react-icons/fi';

import { Button } from '../Button';
import { NavigationMobile } from '../mobile/Menu';

import { Container, Mobile, Row } from './styles';

interface IHeaderProps {
  isVisibleMenu: boolean;
  handleToggleMenu(): void;
}

export function Header({ isVisibleMenu, handleToggleMenu }: IHeaderProps) {
  function clickHandler(e: React.MouseEvent) {
    e.stopPropagation();
    handleToggleMenu();
  }

  return (
    <Container>
      <Row>
        <img src='/assets/logo.svg' alt='Shortly logo' />
        <nav>
          <a href='/'>Features</a>
          <a href='/'>Pricing</a>
          <a href='/'>Resources</a>
        </nav>
      </Row>
      <div className='container__button'>
        <Button variant='link'>Login</Button>
        <Button variant='solid'>Sign Up</Button>
      </div>
      <Mobile onClick={clickHandler}>
        {isVisibleMenu ? <VscChromeClose size={35} /> : <FiMenu size={35} />}
      </Mobile>
      {isVisibleMenu && <NavigationMobile />}
    </Container>
  );
}
