import React from 'react';
import { render } from 'react-dom';
import { core, theme } from '../index';
import Main from './Main';


console.log(core);

function App() {
  return (<core.MuiThemeProvider theme={theme}>
      <Main />
    </core.MuiThemeProvider>
  );
}

render(<App />, document.querySelector('#app'));