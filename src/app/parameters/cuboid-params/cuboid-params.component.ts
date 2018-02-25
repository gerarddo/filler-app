import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ScaffoldService } from '../../services/scaffold.service';

@Component({
  selector: 'app-cuboid-params',
  templateUrl: './cuboid-params.component.html',
  styleUrls: ['../parameters.component.css',
              './cuboid-params.component.css']
})
export class CuboidParamsComponent implements OnInit {

  paramsForm: FormGroup;
  constructor(private scaffoldService: ScaffoldService) { }

  ngOnInit() {
    this.paramsForm = new FormGroup({
      'polygonCase': new FormControl('square'),
      'side': new FormControl(10.18233764, Validators.required),
      'step': new FormControl(2.4, Validators.required),
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
