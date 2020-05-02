import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-cube-wave',
  templateUrl: './cube-wave.component.html',
  styleUrls: ['./cube-wave.component.css']
})
export class CubeWaveComponent implements OnInit {
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
    const w = 24;
    let ma;
    let maxD;

    p.setup = () => {
      const canvas2 = p.createCanvas(p.windowWidth / 2, p.windowHeight / 2, p.WEBGL);
      canvas2.parent('sketch-holder');
      ma = p.atan(p.cos(p.QUARTER_PI));
      maxD = p.dist(0, 0, 200, 200);
    };

    p.draw = () => {
      p.background(255);
      p.ortho(-400, 400, 400, -400, 0, 1000);
      p.rotateX(-ma);
      p.rotateY(-p.QUARTER_PI);

      for (let z = 0; z < p.height; z += w) {
        for (let x = 0; x < p.width; x += w) {
          p.push();
          const d = p.dist(x, z, p.width / 2, p.height / 2);
          const offset = p.map(d, 0, maxD, -p.PI, p.PI);
          const a = angle + offset;
          const h = p.floor(p.map(p.sin(a), -1, 1, 100, 300));
          p.translate(x - p.width / 2, 0, z - p.height / 2);
          p.normalMaterial();
          p.box(w, h, w);
          p.pop();
        }
      }

      angle -= 0.1;
    };
  }
}
