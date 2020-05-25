import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiX } from 'react-icons/fi';

import { Container, Mask, Header, Footer } from './styles';
import { close } from '~/store/modules/dialog/actions';
import { employeeUpdate } from '~/store/modules/employee/actions';

function Dialog() {
  const dispatch = useDispatch();

  const { open, employee } = useSelector((state) => state.dialog);

  /**
   * update salary employee
   *
   * @param {Number} value
   */
  async function handleUpdate(value) {
    await dispatch(close());
    await dispatch(employeeUpdate(employee.id, value));
  }

  const salary = employee.salary || 0;

  return (
    <>
      <Container open={open}>
        <Header>
          <p>Quantos reais adicionar para {employee.title || ''}</p>
          <button type="button" onClick={() => dispatch(close())}>
            <FiX />
          </button>
        </Header>

        <div className="actions">
          <button
            type="button"
            onClick={() => handleUpdate(25)}
            disabled={salary + 25 > 200}
          >
            R$25
          </button>
          <button
            type="button"
            onClick={() => handleUpdate(50)}
            disabled={salary + 50 > 200}
          >
            R$50
          </button>
          <button
            type="button"
            onClick={() => handleUpdate(75)}
            disabled={salary + 75 > 200}
          >
            R$75
          </button>
          <button
            type="button"
            onClick={() => handleUpdate(125)}
            disabled={salary + 125 > 200}
          >
            R$125
          </button>
        </div>

        <Footer />
      </Container>

      <Mask open={open} onClick={() => dispatch(close())} />
    </>
  );
}

export default Dialog;
