import { Component, OnInit } from '@angular/core';
import { Yarn } from '../yarn.model';
import { YarnService } from '../yarn.service';

@Component({
  selector: 'app-yarn-list',
  templateUrl: './yarn-list.component.html',
  styleUrls: ['./yarn-list.component.css']
})
export class YarnListComponent implements OnInit {
  yarnArray: Yarn[];

  constructor(private yarnService: YarnService) { }

  ngOnInit(): void {
    this.yarnArray = this.yarnService.displayYarn();
  }

}
