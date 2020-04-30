import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../services/blog-post.service';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../Models/blog-post.model';
import { Image } from '../Models/image.model';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  post: BlogPost;
  image: Image;

  constructor(
    private route: ActivatedRoute,
    private blogPostService: BlogPostService,
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.blogPostService.getBlogPost(id)
      .subscribe(post => {
        this.post = post;
    });
    this.imageService.getImage(id)
      .subscribe(image => {
         this.image = image;
    });
  }
}
