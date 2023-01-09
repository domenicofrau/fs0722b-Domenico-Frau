import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Component01Component } from './components/component01/component01.component';
import { Component02Component } from './components/component02/component02.component';
import { Component03Component } from './components/component03/component03.component';

@NgModule({
  declarations: [
    AppComponent,
    Component01Component,
    Component02Component,
    Component03Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
