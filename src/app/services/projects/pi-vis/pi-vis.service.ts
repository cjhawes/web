import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PiVisService {

  constructor() { }

  public sketch(p: any) {
    let upi;
    let digits;
    const counts = new Array(10);
    let index = 0;

    p.preload = () => {
      // pi = p.loadStrings('pi-1million.txt');
      upi = '1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170';
    };

    p.setup = () => {
      const canvas2 = p.createCanvas(p.windowWidth / 2, p.windowHeight / 2);
      canvas2.parent('sketch-holder');

      const sdigits = upi[0].split('');

      digits = p.int(sdigits);

      p.background(255);
      p.stroke(0);
      p.noFill();
      p.translate(p.width / 2, p.height / 2);
      p.ellipse(0, 0, 400, 400);
    };

    p.draw = () => {
      p.translate(p.width / 2, p.height / 2);

      const digit = digits[index];
      const nextDigit = digits[index + 1];
      index++;

      const diff = p.TWO_PI / 10;

      const a1 = p.map(digit, 0, 10, 0, p.TWO_PI) + p.random(-diff, diff);
      const a2 = p.map(nextDigit, 0, 10, 0, p.TWO_PI) + p.random(-diff, diff);

      const x1 = 200 * p.cos(a1);
      const y1 = 200 * p.sin(a1);

      const x2 = 200 * p.cos(a2);
      const y2 = 200 * p.sin(a2);

      p.stroke(255, 50);
      p.line(x1, y1, x2, y2);
    };
  }
}
