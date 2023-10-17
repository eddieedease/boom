import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/landing', pathMatch: 'full'},
      {path: 'landing', component: LandingComponent},
      {path: 'about', component: AboutComponent},
      {path: 'admin', component: AdminComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
