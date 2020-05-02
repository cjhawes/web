import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  private p5sketch;

  constructor() { }

  ngOnInit() {
    this.createCanvas();
  }

  createCanvas() {
    this.p5sketch = new p5(this.sketch);
  }

  private sketch(p: any) {
    let angle = 0;
    const r = 200;
    let earth;

    p.preload = () => {
      earth = p.loadImage('../assets/images/earth-bw.jpg');
    };

    p.setup = () => {
      const canvas2 = p.createCanvas(p.windowWidth / 2, p.windowHeight / 2, p.WEBGL);
      canvas2.parent('sketch-holder');
    };

    p.draw = () => {
      p.background(255);
      p.rotateY(angle);
      angle += 0.005;
      p.lights();
      p.fill(200);
      p.noStroke();
      p.texture(earth);
      p.sphere(r);
    };
  }
}
