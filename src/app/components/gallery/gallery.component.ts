import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { images } from 'src/assets/mock-data/image-details';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }
  name!: string;
  images = images;
  imageUrl!:string;

  ngOnInit(): void {
    this.getImage();
  }

  getImage() {
    this.route.queryParams.subscribe(params => {
      console.log(params['data']);
      this.name = params['data']
      for (let i = 0; i < images.length; i++) {
        if (images[i].title == this.name) {
          this.imageUrl = images[i].icons;
        }
      }
    })
  }
}
