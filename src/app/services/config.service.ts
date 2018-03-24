import { Injectable } from '@angular/core'
// import { Http, RequestOptions, Headers } from '@angular/http'

import 'rxjs/add/operator/map';

@Injectable()

export class ConfigService {

    // backEndBaseUrl: string = "http://localhost:3000";
    backEndBaseUrl: string = "https://filler-cidep-b.herokuapp.com";

    constructor(){}

}