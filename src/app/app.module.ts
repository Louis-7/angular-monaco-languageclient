import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { MonacoEditorComponent } from './monaco-editor/monaco-editor.component';

import { MonacoConfig } from './monaco-editor/monaco-config';

@NgModule({
  declarations: [
    AppComponent,
    MonacoEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MonacoEditorModule.forRoot(MonacoConfig) // use forRoot() in main app module only.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
