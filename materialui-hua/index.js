import { createMuiTheme } from '@material-ui/core/styles';
import * as core from '@material-ui/core/index';
import * as icons from '@material-ui/icons';

console.log(core);

const theme = createMuiTheme({
    overrides: {
      MuiButtonBase: { // Name of the component ⚛️ / style sheet
        root: {
          // Some CSS
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 48,
          padding: '0 30px',
          margin: 10,
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        },
      },
    },
    props: {
      // Name of the component ⚛️
      MuiButtonBase: {
        // The properties to apply
        disableRipple: true, // No more ripple, on the whole application 💣!
      }
    }
});

export {
    theme,
    core,
    icons
}