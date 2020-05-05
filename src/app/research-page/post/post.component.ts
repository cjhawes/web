import { Component, OnInit } from '@angular/core';
import { Research } from 'src/app/Models/research.model';
import { ResearchService } from 'src/app/services/research/research.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Research;

  constructor(
    private route: ActivatedRoute,
    private researchService: ResearchService,
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.researchService.getResearchPost(id)
      .subscribe(post => {
        this.post = post;
    });
  }

}
