import React from 'react';

import { Container } from './styles';

interface Props {
  title: string;
  text?: any;
}

const CountryDetails: React.FC<Props> = ({title, text}) => {
  return (
    <Container>
    <span>
      {title} : 
    </span>
    <p>
      {text}
    </p>
    </Container>
  );
}

export default CountryDetails;