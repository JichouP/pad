import React, { Component } from 'react';
import { render } from 'react-dom';
import * as PIXI from 'pixi.js';
import { Stage, Sprite } from 'react-pixi-fiber';
export default class Rot extends Component {
  constructor(props) {
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
