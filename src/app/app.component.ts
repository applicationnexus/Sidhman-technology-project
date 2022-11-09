import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // title = 'sidhman-technology-project';
  name!: string;

  constructor(private router: Router){}

  ngOnInit(): void {
    this.router.navigate(['home']);
  }

  images = [
    {
      title: "Nature"
    },
    {
      title: "Flowers"
    },
    {
      title: "Bird"
    },
    {
      title: "Animal"
    }
  ];

  getImage(imgIndex:number){
    this.router.navigate(['/gallery'], {queryParams:{data:this.images[imgIndex].title}});
    console.log(imgIndex);
    
  }
}
