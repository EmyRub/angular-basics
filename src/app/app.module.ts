import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ContadorComponent } from './contador/contador/contador.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroeComponent,
    ContadorComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
