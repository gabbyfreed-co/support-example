import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-street-name',
  templateUrl: './street-name.component.html',
  styleUrls: ['./street-name.component.scss']
})
export class StreetNameComponent {
  @Input() isReadonly = false;
  listItems = [];
  value: any

}
