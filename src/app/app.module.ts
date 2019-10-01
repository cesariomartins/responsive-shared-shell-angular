import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutWithStepsComponent } from './checkout-with-steps/checkout-with-steps.component';
import { CheckoutWithoutStepsComponent } from './checkout-without-steps/checkout-without-steps.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CheckoutComponent,
    CheckoutWithStepsComponent,
    CheckoutWithoutStepsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
