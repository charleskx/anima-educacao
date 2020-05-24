import React from 'react';
import { AiOutlineDollar } from 'react-icons/ai';
import { FiPlus } from 'react-icons/fi';

import {
  Container,
  Notification,
  Icon,
  Info,
  Actions,
  Percentage,
} from './styles';

function Card() {
  return (
    <Container>
      <Icon>
        <AiOutlineDollar />
      </Icon>

      <Info>
        <h1>Nome da pessoa</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tempora
          sunt vel magnam, labore, quas dicta nesciunt voluptatem soluta natus
          modi, quia esse nisi non perferendis numquam accusamus beatae. Vel?
        </p>

        <div className="percentage">
          <p>Total: R$200,00</p>
          <Percentage width={90} content="R$ 50,00" />
        </div>

        <Actions>
          <button type="button">
            <FiPlus />
            <p>Clique aqui para adicionar reais</p>
          </button>
        </Actions>
      </Info>

      <Notification>
        <AiOutlineDollar />
        <p>Você não adicionou nada</p>
      </Notification>
    </Container>
  );
}

export default Card;
