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
        let encodedParameters = encodeURIComponent(JSON.stringify(parameters))
        let body = 'parameters=' + encodedParameters

        // console.log("from create scaffold")
        // console.log(parameters)

        return this.http
          .post("https://filler-cidep-b.herokuapp.com/fill", body, options)
          .map(res => res.json())
    }


}