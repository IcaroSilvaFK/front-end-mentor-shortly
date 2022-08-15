import { lighten } from 'polished';
import styled, { css } from 'styled-components';

import { Variants } from './variants';

type ButtonProps = {
  variant: Variants;
  px?: number | string;
  py?: number | string;
  size?: number | string;
  rounded?: number | string;
};

export const Container = styled.button<ButtonProps>`
  padding-top: ${({ py }) => (py ? py : '12px')};
  padding-bottom: ${({ py }) => (py ? py : '12px')};
  padding-left: ${({ px }) => (px ? px : '18px')};
  padding-right: ${({ px }) => (px ? px : '18px')};

  font-size: ${({ size }) => (size ? size : '1rem')};

  background: transparent;

  font-weight: bold;

  transition: all linear 0.3s;

  border-radius: ${({ rounded }) => (rounded ? rounded : '20px')};

  ${({ variant, theme }) =>
    variant === 'solid' &&
    css`
      background: ${theme.colors.cyan[500]};
      color: ${theme.colors.white};

      :hover {
        background: ${lighten(0.2, theme.colors.cyan[500])};
      }
    `}

  ${({ variant, theme }) =>
    variant === 'link' &&
    css`
      color: ${theme.colors.gray[300]};

      border-radius: 20px;

      :hover {
        color: ${theme.colors.gray[600]};
      }
    `}
`;
