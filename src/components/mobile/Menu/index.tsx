import { Button } from '../../Button';
import { Container, Separator } from './styles';

export function NavigationMobile() {
  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <ul>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
      <Separator />
      <ul>
        <li>
          <Button variant='link'>Login</Button>
        </li>
        <li>
          <Button variant='solid' rounded='40px'>
            Sign Up
          </Button>
        </li>
      </ul>
    </Container>
  );
}
