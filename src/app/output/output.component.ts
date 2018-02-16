import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  gcode: String = "No gcode has been written yet";

  constructor() { }

  ngOnInit() {
  }

}
