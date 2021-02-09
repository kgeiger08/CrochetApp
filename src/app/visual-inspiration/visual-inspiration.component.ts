import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visual-inspiration',
  templateUrl: './visual-inspiration.component.html',
  styleUrls: ['./visual-inspiration.component.css']
})
export class VisualInspirationComponent implements OnInit {
  pixabayURL = 'https://pixabay.com/api/?key=20209851-bb89ce49d817cc4dd29ff2685&q=crochet+yarn&image_type=photo';
  result = document.getElementById("imgResult");

  constructor() { }

  ngOnInit(): void {

    fetch(this.pixabayURL).then(Response => Response.json().then(data => {
      console.log(data);
      // this.result.innerHTML = "<img class='img-responsive' src='data.id' alt='crochet image'/>";
    })) 

  }

}
