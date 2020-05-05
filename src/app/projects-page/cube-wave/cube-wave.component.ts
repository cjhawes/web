import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';
import { CubeWaveService } from 'src/app/services/projects/cube-wave/cube-wave.service';

@Component({
  selector: 'app-cube-wave',
  templateUrl: './cube-wave.component.html',
  styleUrls: ['./cube-wave.component.css']
})
export class CubeWaveComponent implements OnInit {
  private p5sketch;

  constructor(
    private cubeWaveService: CubeWaveService
  ) { }

  ngOnInit() {
    this.createCanvas();
  }

  createCanvas() {
    this.p5sketch = new p5(this.cubeWaveService.sketch);
  }
}
