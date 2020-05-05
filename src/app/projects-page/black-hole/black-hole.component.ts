import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';
import { BlackHoleService } from 'src/app/services/projects/black-hole/black-hole.service';

@Component({
  selector: 'app-black-hole',
  templateUrl: './black-hole.component.html',
  styleUrls: ['./black-hole.component.css']
})
export class BlackHoleComponent implements OnInit {
  private p5sketch;

  constructor(
    private blackHoleService: BlackHoleService,
  ) { }

  ngOnInit() {
    this.createCanvas();
  }

  createCanvas() {
    this.p5sketch = new p5(this.blackHoleService.sketch);
  }
}
