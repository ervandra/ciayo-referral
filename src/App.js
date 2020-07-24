import React from 'react';
import Home from './pages/Home';
import { ModalProvider } from 'styled-react-modal';

function App() {
  return (
    <ModalProvider>
      <Home />
    </ModalProvider>
  );
}

export default App;
