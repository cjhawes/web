import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../services/blog/blog-post.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  blogPosts;

  constructor(
    private blogPostService: BlogPostService,
  ) { }

  ngOnInit() {
    this.blogPosts = this.blogPostService.getBlogPosts();
  }
}
