import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';
import { setClassMetadata } from '@angular/core/src/r3_symbols';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {
  private p5sketch;

  constructor() { }

  ngOnInit() {
    this.createCanvas();
  }

  createCanvas() {
    // Todo: move sketch to other component
    this.p5sketch = new p5(this.sketch);
  }

  private sketch(p: any) {
    let angle = 0;
    let table;
    let r = 200;
    let earth;

    p.preload = () => {
      earth = p.loadImage('../../assets/images/earth.jpg');
      table = p.loadTable(
        'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.csv',
        'header'
      );
    };

    p.setup = () => {
      let canvas2 = p.createCanvas(p.windowWidth - 800, p.windowHeight - 200, p.WEBGL);
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

      for (let row of table.rows) {
        let lat = row.getNum('latitude');
        let lon = row.getNum('longitude');
        let mag = row.getNum('mag');

        let theta = p.radians(lat);

        let phi = p.radians(lon) + p.PI;

        let x = r * p.cos(theta) * p.cos(phi);
        let y = -r * p.sin(theta);
        let z = -r * p.cos(theta) * p.sin(phi);

        let pos = p.createVector(x, y, z);

        let h = p.pow(10, mag);
        let maxh = p.pow(10, 7);
        h = p.map(h, 0, maxh, 10, 100);
        let xaxis = p.createVector(1, 0, 0);

        let angleb = p.abs(xaxis.angleBetween(pos));

        let raxis = xaxis.cross(pos);

        p.push();
        p.translate(x, y, z);
        p.rotate(angleb, raxis);
        p.fill(255);
        p.box(h, 5, 5);
        p.pop();
      }
    };
  }
}
