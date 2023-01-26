import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxCheckBoxModule } from 'devextreme-angular';
import { AppComponent } from './app.component';
import { LocationFormModule } from './location-form/location-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LocationFormModule,
    DxCheckBoxModule
  ],
  exports: [LocationFormModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
