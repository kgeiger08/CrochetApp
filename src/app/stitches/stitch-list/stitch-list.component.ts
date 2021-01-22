import { Component, OnInit } from '@angular/core';
import { Stitch } from '../stitch.model';
import { StitchService } from '../stitch.service';

@Component({
  selector: 'app-stitch-list',
  templateUrl: './stitch-list.component.html',
  styleUrls: ['./stitch-list.component.css'],
})
export class StitchListComponent implements OnInit {
  stitchesArray: Stitch[];

  constructor(private stitchService: StitchService) { }

  ngOnInit(): void {
    this.stitchesArray = this.stitchService.displayStitches();
  }

}
