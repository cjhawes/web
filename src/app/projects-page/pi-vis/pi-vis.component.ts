import { Component, OnInit } from '@angular/core';
import { PiVisService } from 'src/app/services/projects/pi-vis/pi-vis.service';
import * as p5 from 'p5';

@Component({
  selector: 'app-pi-vis',
  templateUrl: './pi-vis.component.html',
  styleUrls: ['./pi-vis.component.css']
})
export class PiVisComponent implements OnInit {
  private p5sketch;
  constructor(
    private piVisService: PiVisService
  ) { }

  ngOnInit(): void {
    this.createCanvas();
  }

  createCanvas() {
    this.p5sketch = new p5(this.piVisService.sketch);
  }

}
