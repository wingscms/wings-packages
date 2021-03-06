import React from 'react';
import fP from 'filter-invalid-dom-props';
import styled from '../../lib/styled';

import Heading from '../Heading';
import Burger from '../Burger';

import { t, useTheme } from '../../theme';

const Container = styled.div`
  position: relative;
  background-color: ${t(_ => _.dialogBackgroundColor)};
  padding: ${t(_ => _.smallSpacing)};
  min-height: 60px;
`;

const Title = styled(Heading)`
  width: calc(100% - 40px);
  color: ${t(_ => _.dialogTextColor)};
`;

const Close = styled(Burger)`
  position: absolute;
  right: 15px;
  top: 20px;
`;

export default function Header({ onClose, title, ...props }) {
  const _ = useTheme();
  return (
    <Container onClose={onClose} {...fP(props)}>
      {title ? (
        <Title rank={4} noSpacing>
          {title}
        </Title>
      ) : null}
      {onClose ? (
        <Close
          color={_.dialogCloseColor}
          hoverColor={_.dialogCloseHoverColor}
          eaten={true}
          onClick={onClose}
          width={25}
          height={25}
        />
      ) : null}
    </Container>
  );
}
