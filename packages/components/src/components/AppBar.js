import React from 'react';
import fP from 'filter-invalid-dom-props';
import styled, { css } from '../lib/styled';
import { t } from '../theme';

const Position = {
  BOTTOM: 'bottom',
  TOP: 'top',
};

const getPosition = ({ position, hide }) => {
  switch (position) {
    case Position.TOP:
      return css`
        top: 0;
        left: 0;
        ${hide &&
          css`
            opacity: 0;
            transform: translateY(-100%);
          `}
      `;
    case Position.BOTTOM:
      return css`
        bottom: 0;
        left: 0;
        ${hide &&
          css`
            opacity: 0;
            transform: translateY(100%);
          `}
      `;
  }
};

const Container = styled.div`
  position: fixed;
  height: ${t(_ => _.appBarHeight)};
  opacity: 1;
  width: 100%;
  background-color: ${t(_ => _.appBarBackgroundColor)};
  transform: none;
  transition: 0.1s all linear;
  ${getPosition}
`;

function AppBar({ children, hide, position = Position.TOP, ...props }) {
  return (
    <Container hide={hide} position={position} {...fP(props)}>
      {children}
    </Container>
  );
}

AppBar.Position = Position;

export default AppBar;
