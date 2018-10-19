import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule
  ], //brings in other angular modules
  declarations: [
    AppComponent
  ], // used to make components, directives, and pipes availble if do not come from another module
  bootstrap: [
    AppComponent
  ] // used for root module, names entry point of app code.
})

export class AppModule{ }