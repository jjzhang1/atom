import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useDialogStore, useThemeStore } from '../store/themeStore';
import lightTheme from '../themes/light';
import darkTheme from '../themes/dark';
import Close from '../assets/close.svg'
import TransferForm from './TransferForm';

const Content: React.FC = (props) => {
  const { theme, toggleTheme } = useThemeStore();
  const { close } = useDialogStore();

  const handleDialogClose = () => {
    close();
  };

  const Content = styled.div`
    width: 500px;
    background-color: ${(props) => props.theme.dialog.background};
    color: ${(props) => props.theme.dialog.color};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  `;

  const StyleClose = styled(Close) `
    width: 20px;
    height: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
    fill: ${(props) => props.theme.color};
    cursor: pointer;
  `

  return (
    <Content>
      <TransferForm />
    </Content>
  )
};

export default Content;