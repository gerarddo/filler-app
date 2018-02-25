import { ScaffoldService } from './../services/scaffold.service';
import { Component, OnInit} from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";


@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css']
})
export class SimulatorComponent implements OnInit {

  // @ViewChild('header') elementView: ElementRef;
  height: number;
  updated: boolean = false;

  current_url = this.sanitizer.bypassSecurityTrustResourceUrl('https://filler-cidep-b.herokuapp.com/simulator');

  // @ViewChild('div') iframe:ElementRef;

  // height: number = 0;
  // innerHeight: any;
  // innerWidth: any;
  constructor(private scaffoldService: ScaffoldService, private sanitizer: DomSanitizer) {

      this.height = (window.screen.height) - 300 ;

      this.scaffoldService.updatedSimulator.subscribe((updated) => {
        if(updated === false){
          this.current_url = this.sanitizer.bypassSecurityTrustResourceUrl('https://filler-cidep-b.herokuapp.com/simulator');
          updated = true;
        }
      })
   }

  ngOnInit() {
  }
}


