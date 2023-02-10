# AngularAdfs

- `"angular-oauth2-oidc": "^15.0.1"` to `package.json`
- `npm i`

## Vorbereitung
Nach dem Start erfolgt durch Login eine Umleitung auf 
`https://dc2019.poldom.local/adfs/oauth2/authorize/?response_type=code&client_id=633d0b2d-a45e-4e9a-9288-64344f5d19fc&state=OEZka3BnVXk4NWNWT0JEb0o4X2dBRWRzb2N3Q1pPRkE2WUY5dVdIcU0udklTsemicolon%252Fbasics%252Fhome&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2F&scope=openid%20profile%20email%20api&code_challenge=1Rt8g2jGtqSyMavyBJMrSptMal2fes_mx1WAj-1aE1w&code_challenge_method=S256&nonce=OEZka3BnVXk4NWNWT0JEb0o4X2dBRWRzb2N3Q1pPRkE2WUY5dVdIcU0udklT`

Nach der Eingabe der `poldom.local` Logindaten:
`2422...@poldom.local` und dem Kennwort erfolgt ein Login.

Swagger: `https://dc2019.poldom.local/test_service/swagger/index.html`

In Swagger muss dann bei `Authorize` dann der Haken bei `openid` gesetzt werden.

Man ist angemeldet und kommt auf die Admin-Page.



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
