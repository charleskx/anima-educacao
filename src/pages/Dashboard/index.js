import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Header, Content } from './styles';
import { Card, Dialog, Spinner } from '~/components';
import { employeeRequest } from '~/store/modules/employee/actions';

function Dashboard() {
  const dispatch = useDispatch();

  const { employees, loading } = useSelector((state) => state.employee);

  useEffect(() => {
    dispatch(employeeRequest());
  }, [dispatch]);

  return (
    <>
      <Spinner loading={loading} />

      <Container>
        <Header>Pessoas que vão ganhar dinheiro</Header>

        <Content>
          {employees.map((employee) => (
            <Card
              key={employee.id}
              title={employee.employee_name}
              salary={employee.salary}
              id={employee.id}
            />
          ))}
        </Content>
      </Container>

      <Dialog />
    </>
  );
}

export default Dashboard;
