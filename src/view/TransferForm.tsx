import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import AddressRow from './AddressRow';
import AmountInput from './AmountInput';
import ButtonGroup from './ButtonGroup';
import Footer from './Footer';

const Container = styled.div`
  padding: 20px;
  border-radius: 8px;
`;

const Section = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const Label = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

const TransferForm: React.FC = () => {
  return (
    <Container>
      <Header title="Deposit ATOM" />
      <Section>
        <Label>From Cosmos Hub</Label>
        <AddressRow address="atom1xy5y...m6wwz9a" />
        <Label>To Osmosis</Label>
        <AddressRow address="osmo1xy5y...w9a" editable />
      </Section>
      <Section>
        <Label>
          <span>Select amount</span>
          <span>Available 2 ATOM</span>
        </Label>
        <AmountInput amount="2" currency="A" equivalent="$1,013" />
        <ButtonGroup />
      </Section>
      <Footer estimatedTime="20 seconds" />
    </Container>
  );
};

export default TransferForm;