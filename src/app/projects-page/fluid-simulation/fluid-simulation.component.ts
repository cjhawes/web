import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-fluid-simulation',
  templateUrl: './fluid-simulation.component.html',
  styleUrls: ['./fluid-simulation.component.css']
})
export class FluidSimulationComponent implements OnInit {
  private p5sketch;

  constructor() { }

  ngOnInit(): void { // WIP
    // this.createCanvas();
  }

  createCanvas() {
    // this.p5sketch = new p5(this.sketch);
  }

  // private sketch(p: any) {
  //   let fluid;
  //   let N = 256;
  //   let iter = 16;
  //   let SCALE = 4;
  //   let t = 0;

  //   p.IX = (x, y) => {
  //     return x + y * N;
  //   };

  //   p.setup = () => {
  //     const canvas2 = p.createCanvas(p.windowWidth / 2, p.windowHeight / 2);
  //     canvas2.parent('sketch-holder');
  //     p.frameRate(22);
  //     fluid = new Fluid(0.2, 0, 0.0000001);
  //   };

  //   p.draw = () => {
  //     p.stroke(51);
  //     p.strokeWeight(2);

  //     const cx = p.int((0.5 * p.width) / p.SCALE);
  //     const cy = p.int((0.5 * p.height) / p.SCALE);
  //     for (let i = -1; i <= 1; i++) {
  //       for (let j = -1; j <= 1; j++) {
  //         fluid.addDensity(cx + i, cy + j, p.random(50, 150));
  //       }
  //     }

  //     for (let i = 0; i < 2; i++) {
  //       const angle = p.noise(p.t) * p.TWO_PI * 2;
  //       const v = p5.Vector.fromAngle(angle);
  //       v.mult(0.2);
  //       p.t += 0.01;
  //       fluid.addVelocity(cx, cy, v.x, v.y);
  //     }

  //     fluid.step();
  //     fluid.renderD();
  //   };

  //   class Fluid {
  //     size;
  //     dt;
  //     diff;
  //     visc;
  //     s;
  //     density;
  //     Vx;
  //     Vy;
  //     Vx0;
  //     Vy0;
  //     canvas;

  //     constructor(dt, diffusion, viscosity) {
  //       this.size = N;
  //       this.dt = dt;
  //       this.diff = diffusion;
  //       this.visc = viscosity;
  //       this.s = new Array(N * N).fill(0);
  //       this.density = new Array(N * N).fill(0);
  //       this.Vx = new Array(N * N).fill(0);
  //       this.Vy = new Array(N * N).fill(0);
  //       this.Vx0 = new Array(N * N).fill(0);
  //       this.Vy0 = new Array(N * N).fill(0);
  //     }

  //     // step method
  //     step() {
  //       const N = this.size;
  //       const visc = this.visc;
  //       const diff = this.diff;
  //       const dt = this.dt;
  //       const Vx = this.Vx;
  //       const Vy = this.Vy;
  //       const Vx0 = this.Vx0;
  //       const Vy0 = this.Vy0;
  //       const s = this.s;
  //       const density = this.density;

  //       this.diffuse(1, Vx0, Vx, visc, dt);
  //       this.diffuse(2, Vy0, Vy, visc, dt);

  //       this.project(Vx0, Vy0, Vx, Vy);

  //       this.advect(1, Vx, Vx0, Vx0, Vy0, dt);
  //       this.advect(2, Vy, Vy0, Vx0, Vy0, dt);

  //       this.project(Vx, Vy, Vx0, Vy0);
  //       this.diffuse(0, s, density, diff, dt);
  //       this.advect(0, density, s, Vx, Vy, dt);
  //     }

  //     // method to add density
  //     addDensity(x, y, amount) {
  //       const index = p.IX(x, y);
  //       this.density[index] += amount;
  //     }

  //     // method to add velocity
  //     addVelocity(x, y, amountX, amountY) {
  //       const index = p.IX(x, y);
  //       this.Vx[index] += amountX;
  //       this.Vy[index] += amountY;
  //     }

  //     // function to render density
  //     renderD() {
  //       for (let i = 0; i < N; i++) {
  //         for (let j = 0; j < N; j++) {
  //           const x = i * SCALE;
  //           const y = j * SCALE;
  //           const d = this.density[p.IX(i, j)];
  //           p.fill(d);
  //           p.noStroke();
  //           p.rect(x, y, SCALE, SCALE);
  //         }
  //       }
  //     }

  //     // function to render velocity
  //     renderV() {
  //       for (let i = 0; i < N; i++) {
  //         for (let j = 0; j < N; j++) {
  //           const x = i * SCALE;
  //           const y = j * SCALE;
  //           const vx = this.Vx[p.IX(i, j, p.k)];
  //           const vy = this.Vy[p.IX(i, j, p.k)];
  //           this.canvas.stroke(0);

  //           if (!(p.abs(vx) < 0.1 && p.abs(vy) <= 0.1)) {
  //             p.line(x, y, x + vx * SCALE, y + vy * SCALE);
  //           }
  //         }
  //       }
  //     }

  //     set_bnd(b, x) {
  //       for (let i = 1; i < N - 1; i++) {
  //         x[p.IX(i, 0)] = b === 2 ? -x[p.IX(i, 1)] : x[p.IX(i, 1)];
  //         x[p.IX(i, N - 1)] = b === 2 ? -x[p.IX(i, N - 2)] : x[p.IX(i, N - 2)];
  //       }
  //       for (let j = 1; j < N - 1; j++) {
  //         x[p.IX(0, j)] = b === 1 ? -x[p.IX(1, j)] : x[p.IX(1, j)];
  //         x[p.IX(N - 1, j)] = b === 1 ? -x[p.IX(N - 2, j)] : x[p.IX(N - 2, j)];
  //       }

  //       x[p.IX(0, 0)] = 0.5 * (x[p.IX(1, 0)] + x[p.IX(0, 1)]);
  //       x[p.IX(0, N - 1)] = 0.5 * (x[p.IX(1, N - 1)] + x[p.IX(0, N - 2)]);
  //       x[p.IX(N - 1, 0)] = 0.5 * (x[p.IX(N - 2, 0)] + x[p.IX(N - 1, 1)]);
  //       x[p.IX(N - 1, N - 1)] = 0.5 * (x[p.IX(N - 2, N - 1)] + x[p.IX(N - 1, N - 2)]);
  //     }

  //     advect(b, d, d0, velocX, velocY, dt) {
  //       let i0;
  //       let i1;
  //       let j0;
  //       let j1;

  //       const dtx = dt * (N - 2);
  //       const dty = dt * (N - 2);

  //       let s0;
  //       let s1;
  //       let t0;
  //       let t1;
  //       let tmp1;
  //       let tmp2;
  //       let tmp3;
  //       let x;
  //       let y;

  //       const Nfloat = N;
  //       let ifloat;
  //       let jfloat;
  //       let i;
  //       let j;
  //       let k;

  //       for (j = 1, jfloat = 1; j < N - 1; j++, jfloat++) {
  //         for (i = 1, ifloat = 1; i < N - 1; i++, ifloat++) {
  //           tmp1 = dtx * velocX[p.IX(i, j)];
  //           tmp2 = dty * velocY[p.IX(i, j)];
  //           x = ifloat - tmp1;
  //           y = jfloat - tmp2;

  //           if (x < 0.5) { x = 0.5; }
  //           if (x > Nfloat + 0.5) { x = Nfloat + 0.5; }
  //           i0 = Math.floor(x);
  //           i1 = i0 + 1.0;
  //           if (y < 0.5) { y = 0.5; }
  //           if (y > Nfloat + 0.5) { y = Nfloat + 0.5; }
  //           j0 = Math.floor(y);
  //           j1 = j0 + 1.0;

  //           s1 = x - i0;
  //           s0 = 1.0 - s1;
  //           t1 = y - j0;
  //           t0 = 1.0 - t1;

  //           const i0i = parseInt(i0);
  //           const i1i = parseInt(i1);
  //           const j0i = parseInt(j0);
  //           const j1i = parseInt(j1);

  //           d[p.IX(i, j)] =
  //             s0 * (t0 * d0[p.IX(i0i, j0i)] + t1 * d0[p.IX(i0i, j1i)]) +
  //             s1 * (t0 * d0[p.IX(i1i, j0i)] + t1 * d0[p.IX(i1i, j1i)]);
  //         }
  //       }

  //       this.set_bnd(b, d);
  //     }

  //     project(velocX, velocY, pa, div) {
  //       for (let j = 1; j < N - 1; j++) {
  //         for (let i = 1; i < N - 1; i++) {
  //           div[p.IX(i, j)] =
  //             (-0.5 *
  //               (velocX[p.IX(i + 1, j)] -
  //                 velocX[p.IX(i - 1, j)] +
  //                 velocY[p.IX(i, j + 1)] -
  //                 velocY[p.IX(i, j - 1)])) /
  //             N;
  //           pa[p.IX(i, j)] = 0;
  //         }
  //       }

  //       this.set_bnd(0, div);
  //       this.set_bnd(0, p);
  //       this.lin_solve(0, p, div, 1, 6);

  //       for (let j = 1; j < N - 1; j++) {
  //         for (let i = 1; i < N - 1; i++) {
  //           velocX[p.IX(i, j)] -= 0.5 * (p[p.IX(i + 1, j)] - p[p.IX(i - 1, j)]) * N;
  //           velocY[p.IX(i, j)] -= 0.5 * (p[p.IX(i, j + 1)] - p[p.IX(i, j - 1)]) * N;
  //         }
  //       }

  //       this.set_bnd(1, velocX);
  //       this.set_bnd(2, velocY);
  //     }

  //     lin_solve(b, x, x0, a, c) {
  //       const cRecip = 1.0 / c;
  //       for (let t = 0; t < iter; t++) {
  //         for (let j = 1; j < N - 1; j++) {
  //           for (let i = 1; i < N - 1; i++) {
  //             x[p.IX(i, j)] =
  //               (x0[p.IX(i, j)] +
  //                 a *
  //                   (x[p.IX(i + 1, j)] +
  //                     x[p.IX(i - 1, j)] +
  //                     x[p.IX(i, j + 1)] +
  //                     x[p.IX(i, j - 1)])) *
  //               cRecip;
  //           }
  //         }
  //         this.set_bnd(b, x);
  //       }
  //     }
  //     diffuse(b, x, x0, diff, dt) {
  //       const a = dt * diff * (N - 2) * (N - 2);
  //       this.lin_solve(b, x, x0, a, 1 + 6 * a);
  //     }
  //   }
  // }
}
