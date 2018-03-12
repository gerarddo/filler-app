import { ConfigService } from './config.service';
import { Injectable, EventEmitter } from '@angular/core'
import { Http, RequestOptions, Headers } from '@angular/http'

import 'rxjs/add/operator/map';

@Injectable()

export class ScaffoldService {

    updatedCIDEPGcode = new EventEmitter<string>();
    updatedGcode = new EventEmitter<string>();
    updatedSimulator = new EventEmitter<boolean>();
    updatedInfo = new EventEmitter<object>();

    constructor(private http: Http,
                private configService: ConfigService){}

    generateGcodeAndInfo(parameters: any){

        let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        let options = new RequestOptions({headers: headers});
        let encodedParameters = encodeURIComponent(JSON.stringify(parameters))
        let body = 'parameters=' + encodedParameters
        let url = this.configService.backEndBaseUrl + "/fill";

        return this.http
        //   .post("https://filler-cidep-b.herokuapp.com/fill", body, options)
          .post(url, body, options)
          .map(res => res.json())
    }
}