import React from 'react';
import ReactDOM from 'react-dom';
import { Stage } from 'react-pixi-fiber';
import Rot from './rot';

class App extends React.Component<{}, {}> {
  width: number;
  height: number;
  constructor(props: any) {
    super(props);
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }
  render() {
    return (
      <Stage
        width={this.width}
        height={this.height}
        options={{ backgroundColor: 0x000000 }}
      >
        <Rot x={this.width / 2} y={this.height / 2} />
      </Stage>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
