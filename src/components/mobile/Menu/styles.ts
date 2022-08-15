import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  position: absolute;

  @media screen and (max-width: 500px) {
    display: block;

    top: 80px;
    left: 50%;
    transform: translate(-50%);

    color: ${({ theme }) => theme.colors.white};

    background: ${({ theme }) => theme.colors.violet[800]};

    padding: 40px;

    border-radius: 10px;

    width: 90%;

    ul {
      text-align: center;

      display: flex;
      flex-direction: column;
      gap: 20px;

      li {
        button {
          width: 100%;
        }
      }
    }
  }
`;

export const Separator = styled.div`
  height: 1px;
  width: 100%;

  background: ${({ theme }) => transparentize(0.8, theme.colors.gray[300])};

  margin: 20px auto;
`;
