import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EarthService {

  constructor() { }

  public sketch(p: any) {
    let angle = 0;
    let table;
    const r = 200;
    let earth;

    p.preload = () => {
      earth = p.loadImage('../../assets/images/earth.jpg');
      table = p.loadTable(
        'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.csv',
        'header'
      );
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

      for (const row of table.rows) {
        const lat = row.getNum('latitude');
        const lon = row.getNum('longitude');
        const mag = row.getNum('mag');

        const theta = p.radians(lat);

        const phi = p.radians(lon) + p.PI;

        const x = r * p.cos(theta) * p.cos(phi);
        const y = -r * p.sin(theta);
        const z = -r * p.cos(theta) * p.sin(phi);

        const pos = p.createVector(x, y, z);

        let h = p.pow(10, mag);
        const maxh = p.pow(10, 7);
        h = p.map(h, 0, maxh, 10, 100);
        const xaxis = p.createVector(1, 0, 0);

        const angleb = p.abs(xaxis.angleBetween(pos));

        const raxis = xaxis.cross(pos);

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
