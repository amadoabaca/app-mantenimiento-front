import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';




@NgModule({
    imports: [
      BrowserModule,
      AppRoutingModule
    ],
    providers: [provideHttpClient()], 

    bootstrap: [AppComponent,],
  })
  export class AppModule { }

