import { ReactNode } from 'react';

import { Container } from './styles';
import { Variants } from './variants';

interface IButtonProps {
  children: ReactNode;
  variant: Variants;
  px?: number | string;
  py?: number | string;
  size?: number | string;
  rounded?: number | string;
}

export function Button({
  children,
  variant,
  px,
  py,
  size,
  rounded,
}: IButtonProps) {
  return (
    <Container variant={variant} px={px} py={py} size={size} rounded={rounded}>
      {children}
    </Container>
  );
}
