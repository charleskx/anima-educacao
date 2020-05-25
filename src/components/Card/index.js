import React from 'react';
import { AiOutlineDollar } from 'react-icons/ai';
import { FiPlus } from 'react-icons/fi';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import {
  Container,
  Notification,
  Icon,
  Info,
  Actions,
  Percentage,
} from './styles';

import { open } from '~/store/modules/dialog/actions';

function Card({ title, salary, id }) {
  const dispatch = useDispatch();

  const percentage = (salary * 100) / 200;

  return (
    <Container>
      <Icon>
        <AiOutlineDollar />
      </Icon>

      <Info>
        <h1>{title}</h1>

        <p>
          Ao clicar no link abaixo, um dialog irá aparecer perguntando quantos
          reais você deseja adicionar a barra de progresso. A barra deve começar
          em 0.
        </p>

        <div className="percentage">
          <p>Total: R$200,00</p>
          <Percentage
            width={percentage > 100 ? 100 : percentage}
            content={`R$${salary.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
            })}`}
          />
        </div>

        <Actions>
          <button
            type="button"
            onClick={() => dispatch(open({ id, title, salary }))}
            disabled={salary >= 200}
          >
            <FiPlus />
            <p>Clique aqui para adicionar reais</p>
          </button>
        </Actions>
      </Info>

      <Notification color={salary}>
        <AiOutlineDollar />
        <p>
          {salary === 0
            ? 'Você não adicionou nada'
            : `Você adicionou R$${salary.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
              })}`}
        </p>
      </Notification>
    </Container>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  salary: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
