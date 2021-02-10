import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stitch-counter',
  templateUrl: './stitch-counter.component.html',
  styleUrls: ['./stitch-counter.component.css']
})
export class StitchCounterComponent implements OnInit {
  stitchCount = 0;
  rowCount = 0;

  constructor() { }

  ngOnInit(): void {
  }

  stitchCounter() {
    this.stitchCount += 1;
  }

  onClearStitchCounter() {
    this.stitchCount = 0;
  }

  rowCounter() {
    this.rowCount += 1;
  }

  onClearRowCounter() {
    this.rowCount = 0;
  }

}
