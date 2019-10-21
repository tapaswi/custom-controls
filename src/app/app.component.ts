import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public culture = 'en-US';
  public inputData = [
    {
      name: 'Percent Field - 2 decimal places',
      value: 12,
      format: 'percent',
      places: '2',
      readOnly: false
    },
    {
      name: 'Number Field - 2 decimal places',
      value: 452354,
      format: 'number',
      places: '2',
      readOnly: false
    },
    {
      name: 'Number Field - 4 decimal places',
      value: 1995,
      format: 'number',
      places: '4',
      readOnly: false
    },
    {
      name: 'Text Field',
      value: 'Some text here',
      format: 'string',
      places: null,
      readOnly: false
    },
    {
      name: 'Readonly - number Field - No decimal places',
      value: 600000,
      format: 'number',
      places: 0,
      readOnly: true
    }
  ];

  public dataChange(event, value) {
    // console.log('dataChange...', event, value);
  }
}
