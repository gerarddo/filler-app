import { ScaffoldService } from './../../services/scaffold.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cylinder-params',
  templateUrl: './cylinder-params.component.html',
  styleUrls: ['../parameters.component.css',
              './cylinder-params.component.css']
})
export class CylinderParamsComponent implements OnInit {
  paramsForm: FormGroup;
  constructor(private scaffoldService: ScaffoldService) { }

  ngOnInit() {
    this.paramsForm = new FormGroup({
      'polygonCase': new FormControl('circle'),
      'radius': new FormControl(15, Validators.required),
      'step': new FormControl(2.5, Validators.required),
      'height': new FormControl(1.6, Validators.required),
      'heightStep': new FormControl(0.4, Validators.required)
    });
  }

  onSubmit(){
    let parameters = this.paramsForm.value
    this.scaffoldService.createScaffold(parameters).subscribe((data) => {
      this.scaffoldService.updatedGcode.emit(data);
      this.scaffoldService.updatedSimulator.emit(false);
    })
  }
}
