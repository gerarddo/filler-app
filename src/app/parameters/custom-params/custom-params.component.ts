import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-custom-params',
  templateUrl: './custom-params.component.html',
  styleUrls: ['./custom-params.component.css']
})
export class CustomParamsComponent implements OnInit {

  constructor(private _fb: FormBuilder) { }

  public myForm: FormGroup;


  stringPoints: String = "10,10 10,190 160,150";

  @ViewChild('polygon') polygon: ElementRef;

  ngOnInit() {
    this.myForm = this._fb.group({
      // name: ['', [Validators.required, Validators.minLength(5)]],
      points: this._fb.array([
          this.initPoint(),
          this.initPoint(),
          this.initPoint()
      ])
  });

}


get DynamicFormControls() {

  return <FormArray>this.myForm.get('points');
}

  initPoint() {
      return this._fb.group({
          x: ['', Validators.required],
          y: ['', Validators.required]
      });
  }

  addPoint() {
      const control = <FormArray>this.myForm.controls['points'];
      console.log("sdfsdfsd")
      console.log(this.myForm)
      control.push(this.initPoint());
  }

  removePoint(i: number) {
      const control = <FormArray>this.myForm.controls['points'];
      control.removeAt(i);
  }

  save(model: any) {
      // call API to save
      // ...
      this.stringPoints = this.onParse(model.value.points);
      console.log(model.value);
}
  onParse(userPoints: Array<any>){
    var svgPoints: string = "";
    console.log("from on parse")
    console.log(userPoints)
    userPoints.forEach((point) => {
      svgPoints += point.x + "," + point.y + " "
    })
    return svgPoints
  }

}
