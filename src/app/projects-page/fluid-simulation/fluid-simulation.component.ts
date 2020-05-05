import { Component, OnInit } from '@angular/core';
import { FluidSimService } from 'src/app/services/projects/fluid-sim/fluid-sim.service';
// import * as p5 from 'p5';

@Component({
  selector: 'app-fluid-simulation',
  templateUrl: './fluid-simulation.component.html',
  styleUrls: ['./fluid-simulation.component.css']
})
export class FluidSimulationComponent implements OnInit {
  // private p5sketch;

  constructor(
    private fluidSimService: FluidSimService,
  ) { }

  ngOnInit(): void { // WIP
    // this.createCanvas();
  }

  createCanvas() {
    // this.p5sketch = new p5(this.fluidSimService.sketch);
  }
}
