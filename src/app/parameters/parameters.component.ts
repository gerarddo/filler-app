import { ScaffoldService } from './../services/scaffold.service';
import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {

  radius = 15
  step = 2.5;
  height = 1.6;
  heightStep = 0.4;

  constructor(private scaffoldService: ScaffoldService) { }

  ngOnInit() {
  }

  // onSubmit(form: NgForm){
  //   console.log(form.value)
  //   this.scaffoldService.createScaffold(form.value).subscribe((data) => {
  //     this.scaffoldService.updatedGcode.emit(data);
  //   })
  // }
}
