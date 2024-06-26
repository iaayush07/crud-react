import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';


const myColor = [
  '#ededff',
  '#d7d8fc',
  '#aeadf0',
  '#8080e5',
  '#5a59dc',
  '#4241d6',
  '#3534d5',
  '#2727bd',
  '#1f22aa',
  '#151d97'
];
const theme = createTheme({
  colors: {
    myColor,
  }
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>,
)
