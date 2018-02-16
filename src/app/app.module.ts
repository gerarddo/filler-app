import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ParametersComponent } from './parameters/parameters.component';
import { OutputComponent } from './output/output.component';
import { ScaffoldService } from './services/scaffold.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ParametersComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ScaffoldService],
  bootstrap: [AppComponent]
})
export class AppModule { }
