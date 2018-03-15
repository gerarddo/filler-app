import { ScaffoldService } from './../services/scaffold.service';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  gcode: String = "No gcode has been written yet";
  height: number;
  info: any = {
    planks: null,
    area: null,
    volume: null
  }
  isCopied: Boolean = false;


  constructor(private scaffoldService: ScaffoldService) { 
    
    this.scaffoldService.updatedCIDEPGcode.subscribe((updatedCIDEPGcode) => {
      this.gcode = updatedCIDEPGcode
      this.isCopied = false;
    })
    this.scaffoldService.updatedInfo.subscribe((updatedInfo) => {
      this.info = updatedInfo;
    })

    this.height = (window.innerHeight) - 160;
    // console.log(window.innerHeight)

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log(event.target.innerHeight);
    this.height = event.target.innerHeight - 160;
  }

  ngOnInit() {
  }

}
