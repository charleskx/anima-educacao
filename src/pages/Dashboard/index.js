import React from 'react';

import { Container, Header } from './styles';
import { Card } from '~/components';

function Dashboard() {
  return (
    <Container>
      <Header>Pessoas que vão ganhar dinheiro</Header>
      <Card />
    </Container>
  );
}

export default Dashboard;
