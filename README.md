# angular-monaco-languageclient
A ngx project which use https://github.com/TypeFox/monaco-languageclient

## Prepare

Install from repository:

`git clone https://github.com/Louis-7/angular-monaco-languageclient.git`

Install dependency:

`npm install`

Update typescript definition file to make sure project pass compile. Go to `node_modules/monaco-languageclient/lib/index.d.ts`

```typescript
export * from './disposable';
export * from './commands';
export * from './console-window';
// export * from './languages';
// export * from './workspace';
// export * from './converter';
export * from './services';
export * from 'vscode-base-languageclient/lib/base';
export * from 'vscode-base-languageclient/lib/connection';
```

Download example from `https://github.com/TypeFox/monaco-languageclient`, this will be your language-server. Please follow instruction from their github page.

## Run
Start client with `npm start`. And go to `monaco-languageclient\example` run language server.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
