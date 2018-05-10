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

  public options = {
    theme: 'vs-dark',
    glyphMargin: true,
    lightbulb: {
      enabled: true
    }
  };

  public code = `{
    "$schema": "http://json.schemastore.org/coffeelint",
    "line_endings": "unix"
  }`;

  public model: NgxEditorModel = {
    value: this.code,
    language: 'json',
    uri: 'inmemory://model.json',
  };

  constructor() { }

  ngOnInit() {
  }

  monacoOnInit(editor) {
    // create the web socket
    const url = createUrl('/sampleServer');
    const webSocket = createWebSocket(url);
    // listen when the web socket is opened
    listen({
      webSocket,
      onConnection: connection => {
        // create and start the language client
        const languageClient = createLanguageClient(connection);
        const disposable = languageClient.start();
        connection.onClose(() => disposable.dispose());
      }
    });

    const services = createMonacoServices(editor);
    function createLanguageClient(connection: MessageConnection): BaseLanguageClient {
      return new BaseLanguageClient({
        name: 'Sample Language Client',
        clientOptions: {
          // use a language id as a document selector
          documentSelector: ['json'],
          // disable the default error handler
          errorHandler: {
            error: () => ErrorAction.Continue,
            closed: () => CloseAction.DoNotRestart
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

    function createUrl(path: string): string {
      // const protocol = location.protocol === 'https:' ? 'wss' : 'ws';
      // return normalizeUrl(`${protocol}://${location.host}${location.pathname}${path}`);

      return 'ws://localhost:3000/sampleServer'
    }

    function createWebSocket(socketUrl: string): WebSocket {
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

}
