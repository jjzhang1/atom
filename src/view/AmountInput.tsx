import React from 'react';
import styled from 'styled-components';

interface AmountInputProps {
  amount: string;
  currency: string;
  equivalent: string;
}

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.itemBg.background};
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const Icon = styled.div`
  background-color: #e0e7ff;
  border-radius: 50%;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  background: transparent;
  font-size: 14px;
  outline: none;
`;

const Equivalent = styled.div`
  font-size: 14px;
  margin-left: 10px;
`;

const AmountInput: React.FC<AmountInputProps> = ({ amount, currency, equivalent }) => {
  return (
    <AmountContainer>
      <Icon>{currency}</Icon>
      <Input type="text" value={amount} />
      <Equivalent>ATOM ≈{equivalent}</Equivalent>
    </AmountContainer>
  );
};

export default AmountInput;