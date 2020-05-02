import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';
import { platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

@Component({
  selector: 'app-solar-system',
  templateUrl: './solar-system.component.html',
  styleUrls: ['./solar-system.component.css']
})
export class SolarSystemComponent implements OnInit {
  private p5sketch;

  constructor() { }

  ngOnInit(): void {
    this.createCanvas();
  }

  createCanvas() {
    this.p5sketch = new p5(this.sketch);
  }

  private sketch(p: any) {
    let sun;
    p.setup = () => {
      const canvas2 = p.createCanvas(p.windowWidth / 2, p.windowHeight / 2);
      canvas2.parent('sketch-holder');
      sun = new Planet(25, 0, 0, p.random(p.TWO_PI));
      sun.spawnMoons(9);
    };

    p.draw = () => {
      p.background(51);
      p.translate(p.width / 2, p.height / 2);
      sun.show();
      sun.orbit();
    };

    class Planet {
      radius;
      distance;
      orbitspeed;
      angle;
      planets;

      constructor(radius, distance, orbitspeed, angle) {
        this.radius = radius;
        this.distance = distance;
        this.orbitspeed = orbitspeed;
        this.angle = angle;
        this.planets = [];
      }

      orbit() {
        this.angle += this.orbitspeed;
        for (const i in this.planets) {
          this.planets[i].orbit();
        }
      }

      spawnMoons(total) {
        const level = Math.floor(p.random(1, 4));

        for (let i = 0; i < total; i++) {
          const r = this.radius / (Math.floor(p.random(1, 4)) * 2);
          const d = p.random(50, 150);
          const o = p.random(-0.05, 0.05);
          const a = p.random(p.TWO_PI);
          this.planets.push(new Planet(r, d / level, o, a));
          if (level < 3) {
            const num = Math.floor(p.random(0, 4));
            this.planets[i].spawnMoons(num);
          }
        }
      }

      show() {
        p.push();
        p.fill(255, 100);
        p.rotate(this.angle);
        p.translate(this.distance, 0);
        p.ellipse(0, 0, this.radius * 2);
        for (const i in this.planets) {
          this.planets[i].show();
        }
        p.pop();
      }
    }
  }
}
