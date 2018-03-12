import { ConfigService } from './../services/config.service';
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
  url: string = this.configService.backEndBaseUrl + "/simulator-test";
  current_url = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);

  // current_url = this.sanitizer.bypassSecurityTrustResourceUrl('https://filler-cidep-b.herokuapp.com/simulator-test');
  // current_url = this.sanitizer.bypassSecurityTrustResourceUrl(url);

  // @ViewChild('div') iframe:ElementRef;

  // height: number = 0;
  // innerHeight: any;
  // innerWidth: any;
  constructor(private scaffoldService: ScaffoldService, 
              private sanitizer: DomSanitizer,
              private configService: ConfigService) {

      this.height = (window.screen.height) - 100 ;

      this.scaffoldService.updatedSimulator.subscribe((updated) => {
        if(updated === false){
          // this.current_url = this.sanitizer.bypassSecurityTrustResourceUrl('https://filler-cidep-b.herokuapp.com/simulator');
          this.current_url = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);

          updated = true;
        }
      })
   }

  ngOnInit() {
  }
}


