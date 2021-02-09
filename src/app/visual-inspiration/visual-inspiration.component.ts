import { Component, OnInit } from '@angular/core';
import { FetchImageService } from './fetchImage.service';


@Component({
  selector: 'app-visual-inspiration',
  templateUrl: './visual-inspiration.component.html',
  styleUrls: ['./visual-inspiration.component.scss']
})
export class VisualInspirationComponent implements OnInit {
  image: any;
  showImage: boolean = false;
  
  handleImage(data) {
    this.showImage = true;
    let randomImage: any = data.hits[Math.floor(Math.random()*data.hits.length)].webformatURL;
    
    this.image = randomImage;
    console.log(data);
  }

  constructor(private fetchImageService: FetchImageService) { }

  displayImage() {
    return this.fetchImageService.getImage().then(Response => Response.json().then(data => {
      this.handleImage(data);
  })); 
  }

  ngOnInit(): void {

  }

}
