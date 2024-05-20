import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useThemeStore } from '../store/themeStore';
import lightTheme from '../themes/light';
import darkTheme from '../themes/dark';
import Content from './Content';

interface Props {
  isOpen: boolean
}

const Dialog: React.FC<Props> = (props) => {
  const { theme, toggleTheme } = useThemeStore();

  const { isOpen } = props as Props

  const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${(props) => props.theme.background};
    opacity: 0.99;
    color: ${(props) => props.theme.dialog.color};
    position: fixed;
    top: 0px;
    left: 0;
    right: 0;
    bottom: 0;
  `;

  return (
    isOpen ? 
      <>
        <Container></Container>
        <Content></Content>
      </>
      : 
      null
  )
};

export default Dialog;