import React, { Component } from 'react';
import * as PIXI from 'pixi.js';
import { Sprite } from 'react-pixi-fiber';
import bunny from '../res/bunny.png';

interface Props {
  x: number;
  y: number;
  ticker: PIXI.ticker.Ticker;
}
interface State {
  deg: number;
}

export default class Rot extends Component<Props, State> {
  centerAnchor: PIXI.ObservablePoint;
  bunny: PIXI.Texture;
  constructor(props: any) {
    super(props);
    this.state = { deg: 0 };
    this.centerAnchor = new PIXI.ObservablePoint(() => {}, {}, 0.5, 0.5);
    this.bunny = PIXI.Texture.fromImage(bunny);
  }
  componentDidMount = () => {
    this.props.ticker.add(this.animate);
  };
  componentWillUnmount = () => {
    this.props.ticker.remove(this.animate);
  };
  animate = (delta: number) => {
    this.setState({ deg: this.state.deg + delta / 10 });
  };
  render() {
    return (
      <Sprite
        x={this.props.x}
        y={this.props.y}
        texture={this.bunny}
        rotation={this.state.deg}
        anchor={this.centerAnchor}
      />
    );
  }
}
