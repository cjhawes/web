import { Component, OnInit } from '@angular/core';
import { ResearchService } from '../services/research.service';

@Component({
  selector: 'app-research-page',
  templateUrl: './research-page.component.html',
  styleUrls: ['./research-page.component.css']
})
export class ResearchPageComponent implements OnInit {
  researchPosts;

  constructor(
    private researchService: ResearchService,
  ) { }

  ngOnInit(): void {
    this.researchPosts = this.researchService.getResearchPosts();
  }
}
