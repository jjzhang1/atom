import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { useDialogStore } from '../store/themeStore';

interface FooterProps {
  estimatedTime: string;
}

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const TimeEstimation = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.itemBg.background};
  padding: 10px;
  border-radius: 8px;
  width: 96%;
  margin-bottom: 20px;
`;

const TransferButton = styled.button`
  background-color: #000000;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  margin-bottom: 10px;
`;

const CancelButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.dialog.color};
  cursor: pointer;
  font-size: 14px;
`;

const Footer: React.FC<FooterProps> = ({ estimatedTime }) => {
  const { close } = useDialogStore();

  const handleDialogClose = () => {
    close();
  };
  
  return (
    <FooterContainer>
      <TimeEstimation>
        <FontAwesomeIcon icon={faClock} />
        <span style={{ marginLeft: '10px' }}>Estimated time: <strong>{estimatedTime}</strong></span>
      </TimeEstimation>
      <TransferButton onClick={handleDialogClose}>Transfer</TransferButton>
      <CancelButton onClick={handleDialogClose}>Cancel</CancelButton>
    </FooterContainer>
  );
};

export default Footer;