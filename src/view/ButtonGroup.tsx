import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #e0e7ff;
  color: #000;
  border: none;
  border-radius: 8px;
  padding: 10px;
  margin: 0 5px;
  cursor: pointer;
  font-size: 14px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const ButtonGroup: React.FC = () => {
  return (
    <ButtonContainer>
      <Button>Max</Button>
      <Button>1/2</Button>
      <Button>1/3</Button>
    </ButtonContainer>
  );
};

export default ButtonGroup;