import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationFormComponent } from './location-form.component';
import { StreetNameComponent } from './street-name/street-name.component';
import { AppModule } from '../app.module';
import { 
  DxDropDownBoxModule, 
  DxTextBoxModule,
  DxLoadIndicatorModule,
  DxTreeViewModule,
  DxFormModule,
  DxSelectBoxModule 
} from 'devextreme-angular';



@NgModule({
  declarations: [  
    LocationFormComponent,
    StreetNameComponent
  ],
  imports: [
    CommonModule,
    DxDropDownBoxModule,
    DxTextBoxModule,
    DxLoadIndicatorModule,
    DxTreeViewModule,
    DxFormModule,
    DxSelectBoxModule,
  ],
  exports: [LocationFormComponent]
})
export class LocationFormModule { }
