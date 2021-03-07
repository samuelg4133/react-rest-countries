import React from 'react';

import { Container } from './styles';

interface HeaderProps{
  title?: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
  return (
  <Container>
    {title}
  </Container>
    );
}

export default Header;