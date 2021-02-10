import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StitchDetailService } from '../stitch-detail.service';
import { Stitch } from '../stitch.model';

@Component({
  selector: 'app-stitch-detail',
  templateUrl: './stitch-detail.component.html',
  styleUrls: ['./stitch-detail.component.css']
})


export class StitchDetailComponent implements OnInit {
  stitchTypeRoute: {id: number};
  stitchTypeDetail: Stitch;
  

  constructor(private route: ActivatedRoute, private stitchDetailService: StitchDetailService) { }

  ngOnInit(): void {
    this.stitchTypeRoute = {
      id: this.route.snapshot.params['id']
    };

    this.stitchTypeDetail = this.stitchDetailService.displayStitchDetail(this.stitchTypeRoute.id);

  }

}
