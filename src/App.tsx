import * as React from 'react';
import './App.css';
import Canvas from './components/Canvas'
import SteelBeam from './components/SteelBeam'
import WithState from './components/WithState'

import { SHS } from './data/shs'

const App = () => (
  <Canvas>
    {canvas => (
      <WithState initialState={{ x1: 0, y1: 0, x2: 100, y2: 100 }}>
        {({ state, setState }) => (
          <SteelBeam
            scale={canvas.scale}
            {...state}
            material={SHS[1]}
            onChange={setState}
          />
        )}
      </WithState>
    )}
  </Canvas>
);

export default App;
