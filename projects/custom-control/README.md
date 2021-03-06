# Custom-Control
The library enabling two way data binding with formating. Validation based on the type of format of input.

### Quick links

[Demo](https://customcontrol.stackblitz.io/)
 |
[StackBlitz example](https://stackblitz.com/edit/customcontrol)
 |
[Documentation](https://tapaswi.github.io/custom-controls/)

### Installing and usage

```bash
npm install custom-control --save
```

##### Load the module for your app:

```javascript
import { CustomControlModule } from 'custom-control';

@NgModule({
  ...
  imports: [
    ...
    CustomControlModule
  ]
})
```


##### Use it in component:

```javascript
input = {
    name: 'Number Field - 2 decimal places',
    value: 452354,
    format: 'number',
    places: '2',
    readOnly: false
};
culture = 'en-US';
```

```HTML
<c-input class="input-fields"
    [(model)]="input.value" 
    [format]="input.format" 
    [places]="input.places" 
    [readOnly]="input.readOnly" 
    [culture]="culture"
    (modelChange)="dataChange($event, input.value)">
</c-input>
```