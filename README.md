# angular-monaco-languageclient

**Update: Upgrade to Angular 9 now.**

**Star this repo if it helps you**

[![cpgif](https://github.com/Louis-7/angular-monaco-languageclient/blob/master/languageclient.gif?raw=true)](https://github.com/Louis-7/angular-monaco-languageclient)

A Monaco editor (with the ability to connect to a language server) based on Angular framework. This project is an example to show how to use [ngx-monaco-editor](https://github.com/atularen/ngx-monaco-editor) with [monaco-languageclient](https://github.com/TypeFox/monaco-languageclient) together, there are some errors when I use these libraries together, so this project is to show which version of these libraries you should use and how to connect your Monaco editor to language server. If you're trying to build a code editor/IDE based on Angular and connect to a language server, this project could be a good start.

If you just need to use Monaco Editor with Angular, you should go to [ngx-monaco-editor](https://github.com/atularen/ngx-monaco-editor).

**Old version:**

- Angular 8: ng-v8


## Prepare

Install from the repository:

`git clone https://github.com/Louis-7/angular-monaco-languageclient.git`

Install dependencies:

`npm install`

Download example language server from [monaco-languageclient](https://github.com/TypeFox/monaco-languageclient). Please follow instructions from their GitHub page.

## Run
Start client with `npm start`. And go to `monaco-languageclient\example` run language server.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Notes

- Only JSON has been tested with the language server. I didn't test other languages, but it should be similar. I will find more language server and put them in this example in the future.
- I see some developers are suffering from the build error when using Angular and monaco-languageclient together. I solve the problem with an additional webpack configuration file, you will find `extra-webpack.config.js` under the root folder.
