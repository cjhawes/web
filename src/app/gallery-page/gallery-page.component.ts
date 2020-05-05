import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { Image } from '../Models/image.model';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent implements OnInit {
  images: Image[];

  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit() {
    this.imageService.getImages()
      .subscribe(allImages => {
        this.images = allImages;
    });
  }
}
