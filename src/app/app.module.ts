import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

import { Routes, RouterModule } from '@angular/router';
import { routing } from './app.routing';

import { Angular2TokenService, A2tUiModule } from 'angular2-token';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    A2tUiModule
  ],
  providers:    [ Angular2TokenService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
