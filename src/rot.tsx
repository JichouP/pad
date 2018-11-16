import React, { Component } from 'react';
import * as PIXI from 'pixi.js';
import { Sprite } from 'react-pixi-fiber';
import bunny from './res/bunny.png';

export default class Rot extends Component<
  { x: number; y: number },
  { deg: number }
> {
  centerAnchor: PIXI.ObservablePoint;
  ticker: PIXI.ticker.Ticker;
  bunny: PIXI.Texture;
  constructor(props: any) {
    super(props);
    this.state = { deg: 0 };
    this.centerAnchor = new PIXI.ObservablePoint(() => {}, {}, 0.5, 0.5);
    this.ticker = new PIXI.ticker.Ticker();
    this.ticker.autoStart = true;
    this.bunny = PIXI.Texture.fromImage(bunny);
  }
  componentDidMount = () => {
    this.ticker.add(this.animate);
  };
  componentWillUnmount = () => {
    this.ticker.remove(this.animate);
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
