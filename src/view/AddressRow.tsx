import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface AddressRowProps {
  address: string;
  editable?: boolean;
}

const AddressContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.itemBg.background};
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const Icon = styled.div`
  border-radius: 50%;
  margin-right: 10px;
`;

const Address = styled.div`
  flex: 1;
  font-size: 14px;
`;

const EditIcon = styled.div`
  margin-left: 10px;
  cursor: pointer;
`;

const AddressRow: React.FC<AddressRowProps> = ({ address, editable }) => {
  return (
    <AddressContainer>
      <Icon>🌐</Icon>
      <Address>{address}</Address>
      {editable && <EditIcon><FontAwesomeIcon icon={faPen} /></EditIcon>}
      {!editable&&<FontAwesomeIcon icon={faArrowRight} />}
    </AddressContainer>
  );
};

export default AddressRow;