
Antes de ejecutar la aplicacion, hay que obtener un token que la api de spotify proporciona. Estos son los pasos a seguir

Entrar en la página e iniciar sesion, como si se estuviera en Spotify https://developer.spotify.com/dashboard/login

Una vez logeado, habría que ir al apartado de console.

Pincha en cualquier parte del menu de la izquierda. Van a aparecer un listado de metodos con sus endpoints. Clicar en cualquiera

Copiar el OAuth Token. Caduca cada hora, así que si caducara, habria que repetir todos estos pasos

Una vez que se tiene el codigo, pegarlo en el archivo spotify.service.ts de la aplicacion (colocarlo despues del Bearer, linea 20). Guardar los cambios

Ejecutar el comando npm install para descargarse las librerias de Angular


--------------------------------
# Spotify

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

