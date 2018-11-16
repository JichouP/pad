import React, { Component } from 'react';
import * as PIXI from 'pixi.js';
import { Stage, Sprite } from 'react-pixi-fiber';

export default class Rot extends Component<
  { x: number; y: number },
  { deg: number }
> {
  bunny: string;
  centerAnchor: PIXI.Point;
  constructor(props: any) {
    super(props);
    this.bunny = './res/bunny.png';
    this.state = { deg: 0 };
    this.centerAnchor = new PIXI.Point(0.5, 0.5);
  }
  componentDidMount() {
    PIXI.ticker.add(this.animate);
  }
  componentWillUnmount() {
    PIXI.ticker.remove(this.animate);
  }
  animate(delta) {
    this.setState({ deg: this.deg + delta });
  }
  render() {
    return <Sprite texture={this.bunny} rotation={this.state.deg} />;
  }
}
