# Filler 
_Filler_ is a javascript web application that creates gcode paths for 3D printing scaffolds with investigative purposes on tissue engineering applications.

It is divided in two pieces of software, one for the [back-end](https://filler-cidep-b.herokuapp.com) and another for the [front-end](https://filler-cidep.herokuapp.com). 

This project was generated with [Angular CLI] and still is a work in progress.

## Repositories
In a similar fashion, the app repositories are divided into [back-end](https://github.com/gerarddo/filler-cidep-api) and [front-end](https://github.com/gerarddo/filler-cidep)

---
## Filler GUI

Take a look at the [live demo](https://filler-cidep.herokuapp.com).


## Getting Started

```
$ git clone https://github.com/gerarddo/filler-cidep.git
$ cd filler-cidep
$ npm install
$ ng serve
```

Open your browser at [http://localhost:4200](http://localhost:4200).
The connection with Filler API is set at ./src/app/services/config.service.ts with a default base url pointing to [https://filler-cidep-b.herokuapp.com](https://filler-cidep-b.herokuapp.com). You may change the url in case you want to serve the API yourself.

### Prerequisites

Filler GUI is built on [Angular 5](https://angular.io) and makes use of [Bootstrap](https://getbootstrap.com/) and [ng-bootstrap](https://ng-bootstrap.github.io/#/home).

## Authors

* **Gerardo Mijares** - [lapsusdev.com](https://lapsusdev.com)

## License

This project is licensed under the [MIT License](https://en.wikipedia.org/wiki/MIT_License).


