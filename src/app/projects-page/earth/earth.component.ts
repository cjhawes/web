import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';
import { EarthService } from 'src/app/services/projects/earth/earth.service';

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.css']
})
export class EarthComponent implements OnInit {
  private p5sketch;

  constructor(
    private earthService: EarthService,
  ) { }

  ngOnInit() {
    this.createCanvas();
  }

  createCanvas() {
    this.p5sketch = new p5(this.earthService.sketch);
  }
}
