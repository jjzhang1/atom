import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useThemeStore, useDialogStore } from './store/themeStore';
import lightTheme from './themes/light';
import darkTheme from './themes/dark';
import Dialog from './view/Dialog';
import TransferForm from './view/TransferForm';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

const App: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore();
  const { isOpen, toogleOpen } = useDialogStore();

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <Container>
        <h1>ATOM</h1>
        <Button onClick={toggleTheme}> 切换到 {theme === 'light' ? '暗' : '亮'} 主题 </Button>
        <Button onClick={toogleOpen}>{isOpen ? '关闭' : '打开'} 弹窗</Button>
        <Dialog isOpen={isOpen} />
      </Container>
    </ThemeProvider>
  );
};

export default App;