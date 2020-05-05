import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';
import { platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { SolarSystemService } from 'src/app/services/projects/solar-system/solar-system.service';

@Component({
  selector: 'app-solar-system',
  templateUrl: './solar-system.component.html',
  styleUrls: ['./solar-system.component.css']
})
export class SolarSystemComponent implements OnInit {
  private p5sketch;

  constructor(
    private solarSystemService: SolarSystemService,
  ) { }

  ngOnInit(): void {
    this.createCanvas();
  }

  createCanvas() {
    this.p5sketch = new p5(this.solarSystemService.sketch);
  }
}
