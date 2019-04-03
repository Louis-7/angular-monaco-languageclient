# angular-monaco-languageclient
A Monaco editor based on Angular framework. This project is an example to show how to use ngx-monaco-editor with monaco language client, there are some errors when I use these libraries together, so this project is to show which version of these libraries you should use and how to connect your Monaco editor to language server. If you're trying to build a code editor/IDE based on Angular, this project could be a good start.

## Prepare

Install from repository:

`git clone https://github.com/Louis-7/angular-monaco-languageclient.git`

Install dependency:

`npm install`

Update typescript definition or you will fail the compilation. This is because ngx-monaco-editor & monaco-languageclient both use the Monaco definition file and it makes the duplicate identifier issue. Go to `node_modules/monaco-languageclient/lib/index.d.ts`

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

## Notice

Only json has been tested with language server. I didn't test other language, but it should be similar. I will find more language server and put them in this example in future.
