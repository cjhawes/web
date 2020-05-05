import { Injectable } from '@angular/core';
import * as p5 from 'p5';

@Injectable({
  providedIn: 'root'
})
export class BlackHoleService {

  constructor() { }

  public sketch(p: any) {
    const c = 38.5;
    const G = 2;
    const dt = 0.1;
    const particles = [];

    let m87;
    let start;
    let end;

    p.setup = () => {
      const canvas2 = p.createCanvas(p.windowWidth / 2, p.windowHeight / 2);
      canvas2.parent('sketch-holder');
      m87 = new Blackhole(p.width / 2, p.height / 2, 10000);

      start = p.height / 2;
      end = p.height / 2 - m87.rs * 2.6;

      for (let y = 0; y < start; y += 10) {
        particles.push(new Photon(p.width - 20, y));
      }
    };

    p.draw = () => {
      p.background(255);

      p.stroke(0);
      p.strokeWeight(1);
      p.line(0, start, p.width, start);
      p.line(0, end, p.width, end);

      for (const particle of particles) {
        m87.pull(particle);
        particle.update();
        particle.show();
      }
      m87.show();
    };

    class Blackhole {
      pos;
      mass;
      rs;

      constructor(x, y, m) {
        this.pos = p.createVector(x, y);
        this.mass = m;
        this.rs = (2 * G * this.mass) / (c * c);
      }

      pull(photon) {
        const force = p5.Vector.sub(this.pos, photon.pos);
        const r = force.mag();
        const fg = (G * this.mass) / (r * r);
        force.setMag(fg);
        photon.vel.add(force);
        photon.vel.setMag(c);

        if (r < this.rs) {
          photon.stop();
        }
      }

      show() {
        p.ellipseMode(p.RADIUS);
        p.fill(0);
        p.noStroke();
        p.ellipse(this.pos.x, this.pos.y, this.rs);

        p.noFill();
        p.stroke(100, 100);
        p.strokeWeight(64);
        p.ellipse(this.pos.x, this.pos.y, this.rs * 3 + 32);

        p.stroke(255, 150, 0, 100);
        p.strokeWeight(32);

        p.ellipse(this.pos.x, this.pos.y, this.rs * 1.5 + 16);
      }
    }

    class Photon {
      pos;
      vel;
      history;
      stopped;
      theta;

      constructor(x, y) {
        this.pos = p.createVector(x, y);
        this.vel = p.createVector(-c, 0);
        this.history = [];
        this.stopped = false;
        this.theta = 0;
      }

      stop() {
        this.stopped = true;
      }

      update() {
        if (!this.stopped) {
          this.history.push(this.pos.copy());
          const deltaV = this.vel.copy();
          deltaV.mult(dt);
          this.pos.add(deltaV);
        }

        if (this.history.length > 500) {
          this.history.splice(0, 1);
        }
      }

      show() {
        p.strokeWeight(4);
        p.stroke(255, 0, 0);
        p.point(this.pos.x, this.pos.y);

        p.strokeWeight(2);
        p.noFill();
        p.beginShape();
        for (const v of this.history) {
          p.vertex(v.x, v.y);
        }

        p.endShape();
      }
    }
  }
}
