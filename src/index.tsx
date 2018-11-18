import React from 'react';
import ReactDOM from 'react-dom';
import { Stage } from 'react-pixi-fiber';
import Rot from './rot';

interface State {
  width: number;
  height: number;
}

class App extends React.Component<{}, State> {
  ticker: PIXI.ticker.Ticker;
  constructor(props: any) {
    super(props);
    this.state = { width: window.innerWidth, height: window.innerHeight };
    this.ticker = new PIXI.ticker.Ticker();
    this.ticker.autoStart = true;
    window.onresize = () => {
      this.setState({
        ...this.state,
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
  }
  render() {
    return (
      <Stage
        width={this.state.width}
        height={this.state.height}
        options={{ backgroundColor: 0x000000 }}
      >
        <Rot
          x={this.state.width / 2}
          y={this.state.height / 2}
          ticker={this.ticker}
        />
      </Stage>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
