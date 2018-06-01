import React from 'react';
import ReactDOM from 'react-dom';
import { Sprite, Stage } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';
import Rot from './rot';

// const Show = props => {
//   return (
//     <Sprite
//       anchor={centerAnchor}
//       texture={PIXI.Texture.fromImage(bunny)}
//       {...props}
//     />
//   );
// };

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Stage width={800} height={600} options={{ backgroundColor: 0x000000 }}>
        <Rot x={400} y={300} />
      </Stage>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
