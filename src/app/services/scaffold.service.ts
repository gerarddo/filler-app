import { Injectable, EventEmitter } from '@angular/core'
import { Http, RequestOptions, Headers } from '@angular/http'

import 'rxjs/add/operator/map';

@Injectable()

export class ScaffoldService {

    updatedGcode = new EventEmitter<string>();

    constructor(private http: Http){}

    createScaffold(parameters: any){

        let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        let options = new RequestOptions({headers: headers});

        // parameters.polygonCase = "circle"

        let encodedParameters = encodeURIComponent(JSON.stringify(parameters))
        let body = 'parameters=' + encodedParameters

        console.log("from create scaffold")
        console.log(body)

        return this.http
          .post("https://filler-cidep-b.herokuapp.com/fill", body, options)
        //   .post("http://159.65.186.192/fill", body, options)
          .map(res => res.json())
    }


}