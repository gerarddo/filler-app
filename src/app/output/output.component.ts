import { ScaffoldService } from './../services/scaffold.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  gcode: String = "No gcode has been written yet";

  constructor(private scaffoldService: ScaffoldService) { 
    this.scaffoldService.updatedGcode.subscribe((updatedGcode) => {
      this.gcode = updatedGcode
    })
  }

  ngOnInit() {
  }

}
