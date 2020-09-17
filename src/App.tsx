import React from 'react';

import GlobalStyles from './styles/global';
import { Main } from './styles/index';

function App() {
  return (
    <>
      <GlobalStyles />

      {/* Tamanho da tela em cerca de 16X o tamanho da tela em altura */}
      <Main style={{ height: '1610vh' }}>

      </Main>
    </>
  );
}

export default App;
