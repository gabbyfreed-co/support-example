import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SmartyStreetsAddress } from '../app.model';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.scss']
})
export class LocationFormComponent {
  states = [];
  counties = [];
  smartySheetsAddress: SmartyStreetsAddress = {};
  @Input() readOnly = false;


  constructor() {}

  ngOnInit() {

  }


}