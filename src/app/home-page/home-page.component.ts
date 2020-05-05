import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';
import { AboutMeService } from '../services/home/about-me.service';
import { HomeP5Service } from '../services/projects/home/home-p5.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  private p5sketch;
  aboutMe: string;

  constructor(
    private homep5Service: HomeP5Service,
    private aboutMeService: AboutMeService
  ) { }

  ngOnInit() {
    this.createCanvas();
    this.aboutMe = this.aboutMeService.getAboutMe();
  }

  createCanvas() {
    this.p5sketch = new p5(this.homep5Service.sketch);
  }
}
