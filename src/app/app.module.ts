import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ParametersComponent } from './parameters/parameters.component';
import { OutputComponent } from './output/output.component';
import { ScaffoldService } from './services/scaffold.service';
import { HttpModule } from '@angular/http';
import { CylinderParamsComponent } from './parameters/cylinder-params/cylinder-params.component';
import { CuboidParamsComponent } from './parameters/cuboid-params/cuboid-params.component';
import { CustomParamsComponent } from './parameters/custom-params/custom-params.component';
import { SimulatorComponent } from './simulator/simulator.component';

const appRoutes: Routes = [
  // {path: 'parameters', component: ParametersComponent, children: [
  {path: 'parameters/cylinder', component: CylinderParamsComponent},
  {path: 'parameters/cuboid', component: CuboidParamsComponent},
  {path: 'parameters/custom', component: CustomParamsComponent},
  {path: 'simulator', component: SimulatorComponent}
  // ]}
]

@NgModule({
  declarations: [
    AppComponent,
    ParametersComponent,
    OutputComponent,
    CylinderParamsComponent,
    CuboidParamsComponent,
    CustomParamsComponent,
    SimulatorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ScaffoldService],
  bootstrap: [AppComponent]
})
export class AppModule { }
