import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HahaComponent } from './haha/haha.component';


import { createCustomElement} from '@angular/elements';
import { RadioComponent } from './haha/radio.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HahaComponent,
    RadioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  

constructor(injector: Injector){
  const test = createCustomElement(HahaComponent, {injector});
  customElements.define('app-haha',test);

  const heheElement = createCustomElement(RadioComponent, {injector});
  customElements.define('app-haha2',heheElement);
}

 }
