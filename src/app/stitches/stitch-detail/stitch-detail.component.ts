import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stitch-detail',
  templateUrl: './stitch-detail.component.html',
  styleUrls: ['./stitch-detail.component.css']
})
export class StitchDetailComponent implements OnInit {
  stitchTypeRoute: {id: number};
  

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.stitchTypeRoute = {
      id: this.route.snapshot.params['id']
    };

  }

  stitchType = [
    {
      name: 'Single Crochet',
      stitchImg: 'https://i.pinimg.com/originals/30/c7/5e/30c75e5540f5066ca23bafbb898aa41b.jpg',
      stitchDes: ''
    },
    {
      name: 'Half Double Crochet',
      stitchImg: '',
      stitchDes: ''
    },
    {
      name: 'Double Crochet',
      stitchImg: '',
      stitchDes: ''
    }

  ];

}
