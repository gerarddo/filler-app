import { ScaffoldService } from './../services/scaffold.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  gcode: String = "No gcode has been written yet";
  height: number;

  constructor(private scaffoldService: ScaffoldService) { 
    this.scaffoldService.updatedCIDEPGcode.subscribe((updatedCIDEPGcode) => {
      this.gcode = updatedCIDEPGcode
    })

    // this.scaffoldService.updatedGcode.subscribe((Gcode) => {
    //   this.gcode = Gcode
    // })

    this.height = (window.screen.height) - 650 ;
  }



  ngOnInit() {
  }

}
