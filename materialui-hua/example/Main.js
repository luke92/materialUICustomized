import React from 'react';
import { core } from '../index';

function ContainedButtons(props) {
  return (<div>
      <core.Button variant="contained" >
        Default
      </core.Button>
      <core.Button variant="contained" color="primary" >
        Primary
      </core.Button>
      <core.Button variant="contained" color="secondary" >
        Secondary
      </core.Button>
      <core.Button variant="contained" color="secondary" disabled >
        Disabled
      </core.Button>
      <core.Button variant="contained" href="#contained-buttons" >
        Link
      </core.Button>
    </div>
  );
}

export default ContainedButtons;