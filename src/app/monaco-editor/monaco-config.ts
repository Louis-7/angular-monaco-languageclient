import { NgxMonacoEditorConfig } from 'ngx-monaco-editor';

export const MonacoConfig: NgxMonacoEditorConfig = {
    baseUrl: 'assets', // configure base path for monaco editor
    defaultOptions: { scrollBeyondLastLine: false }, // pass deafult options to be used
    onMonacoLoad: monacoOnLoad
};

export function monacoOnLoad() {
    // here monaco object will be avilable as window.monaco use this function to extend monaco editor functionalities.
    console.log((<any>window).monaco);

    // // register Monaco languages
    // monaco.languages.register({
    //     id: 'json',
    //     extensions: ['.json', '.bowerrc', '.jshintrc', '.jscsrc', '.eslintrc', '.babelrc'],
    //     aliases: ['JSON', 'json'],
    //     mimetypes: ['application/json'],
    // });

    // // register Monaco languages
    // monaco.languages.register({
    //     id: 'typescript',
    //     extensions: ['.ts', '.tsc'],
    //     aliases: ['TYPESCRIPT', 'typescript'],
    //     mimetypes: ['text/x-typescript'],
    // });
}
