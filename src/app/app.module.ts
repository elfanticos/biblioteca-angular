import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesingPatternModule } from './desing-pattern/desing-pattern.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DesingPatternModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
