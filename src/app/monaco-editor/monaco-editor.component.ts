import { Component, OnInit } from '@angular/core';
import { NgxEditorModel } from 'ngx-monaco-editor';

import { listen, MessageConnection } from 'vscode-ws-jsonrpc';
import {
  BaseLanguageClient, CloseAction, ErrorAction,
  createMonacoServices, createConnection
} from 'monaco-languageclient';
import { normalizeUrl } from 'normalize-url';
const ReconnectingWebSocket = require('reconnecting-websocket');
@Component({
  selector: 'app-monaco-editor',
  templateUrl: './monaco-editor.component.html',
  styleUrls: ['./monaco-editor.component.sass']
})
export class MonacoEditorComponent implements OnInit {

  public languageId = 'json';
  // public languageId = 'typescript';
  // public languageId = 'javascript';

  public options = {
    theme: 'vs-light',
    glyphMargin: true,
    lightbulb: {
      enabled: true
    },
    language: this.languageId
  };

  private code = `{
    "$schema": "http://json.schemastore.org/coffeelint",
    "line_endings": "unix"
  }`;

  // public model: NgxEditorModel = {
  //   value: this.code,
  //   language: this.languageId,
  //   // uri: 'https://github.com/Microsoft/vscode-extension-samples/blob/master/package.json',
  // };

  constructor() { }

  ngOnInit() {
  }

  monacoOnInit(editor) {
    // create the web socket
    const url = this.createUrl();
    const webSocket = this.createWebSocket(url);
    // listen when the web socket is opened
    const services = createMonacoServices(editor);
    listen({
      webSocket,
      onConnection: connection => {
        // create and start the language client
        const languageClient = this.createLanguageClient(connection, services);
        const disposable = languageClient.start();
        connection.onClose(() => disposable.dispose());
      }
    });
  }

  public createUrl(): string {
    // const protocol = location.protocol === 'https:' ? 'wss' : 'ws';
    // return normalizeUrl(`${protocol}://${location.host}${location.pathname}${path}`);

    switch (this.languageId) {
      case 'json':
        return 'ws://localhost:3000/sampleServer';
      case 'typescript':
        return 'ws://dln-vm-db2zos1:33000/services/languages/typescript';
    }
  }

  public createLanguageClient(connection: MessageConnection, services: BaseLanguageClient.IServices): BaseLanguageClient {
    return new BaseLanguageClient({
      name: `${this.languageId.toUpperCase()} Client`,
      clientOptions: {
        // use a language id as a document selector
        documentSelector: [this.languageId],
        // disable the default error handler
        errorHandler: {
          error: () => ErrorAction.Continue,
          closed: () => CloseAction.Restart
        }
      },
      services,
      // create a language client connection from the JSON RPC connection on demand
      connectionProvider: {
        get: (errorHandler, closeHandler) => {
          return Promise.resolve(createConnection(connection, errorHandler, closeHandler));
        }
      }
    });
  }

  public createWebSocket(socketUrl: string): WebSocket {
    const socketOptions = {
      maxReconnectionDelay: 10000,
      minReconnectionDelay: 1000,
      reconnectionDelayGrowFactor: 1.3,
      connectionTimeout: 10000,
      maxRetries: Infinity,
      debug: false
    };
    return new ReconnectingWebSocket(socketUrl, undefined, socketOptions);
  }

}
