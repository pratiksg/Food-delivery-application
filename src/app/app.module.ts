import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DeliveryboyModule } from './deliveryboy/deliveryboy.module';
import { WelcomeComponent } from './welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { ResourceNotFoundComponent } from './notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,ResourceNotFoundComponent
  ],
  providers: [

  ],
  bootstrap: [AppComponent],
  imports: [
   
    DeliveryboyModule,
    RouterModule.forRoot(appRoutes)]
})
export class AppModule { }
