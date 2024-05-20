import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDialogStore } from '../store/themeStore';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin: 0;
`;

interface HeaderProps {
  title: string;
}


const Header: React.FC<HeaderProps> = ({ title }) => {

  const { close } = useDialogStore();

  const handleDialogClose = () => {
    close();
  };
  
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      <FontAwesomeIcon icon={faTimes} onClick={handleDialogClose} />
    </HeaderContainer>
  );
};

export default Header;