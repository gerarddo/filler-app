import { ScaffoldService } from './../../services/scaffold.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-info',
  templateUrl: './output-info.component.html',
  styleUrls: ['./output-info.component.css']
})
export class OutputInfoComponent implements OnInit {

  info: object = {
    planks: null,
    area: null,
    volume: null
  }


  constructor(private scaffoldService: ScaffoldService) { 
    this.scaffoldService.updatedInfo.subscribe((updatedInfo) => {
      this.info = updatedInfo;
    })
  }

  ngOnInit() {
  }

}
