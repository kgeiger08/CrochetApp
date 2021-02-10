import { Component, Input, OnInit } from '@angular/core';
import { Stitch } from '../stitch.model';

@Component({
  selector: 'app-stitch-type',
  templateUrl: './stitch-type.component.html',
  styleUrls: ['./stitch-type.component.css']
})
export class StitchTypeComponent implements OnInit {
  @Input() stitch: Stitch;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
