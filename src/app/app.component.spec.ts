import { TestBed, async } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';

@Component({selector: 'ngx-monaco-editor', template: ''})
class EditorStubComponent {}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        EditorStubComponent,
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: []
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;    
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-monaco-languageclient'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-monaco-languageclient');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('angular-monaco-languageclient app is running!');
  });
});
