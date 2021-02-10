import { Component, Input, OnInit } from '@angular/core';
import { Yarn } from '../yarn.model';

@Component({
  selector: 'app-type-of-yarn',
  templateUrl: './type-of-yarn.component.html',
  styleUrls: ['./type-of-yarn.component.css']
})
export class TypeOfYarnComponent implements OnInit {
  @Input() yarn: Yarn;

  constructor() { }

  ngOnInit(): void {
  }

}
