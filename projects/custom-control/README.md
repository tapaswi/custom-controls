# Custom-Control
The library enabling two way data binding with formating. Validation based on the type of format of input.

### Quick links

[Example application](https://tapaswi.github.io)
 |
[StackBlitz example](https://stackblitz.com/github/tapaswi/custom-control)

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
}
```

```HTML
<c-input class="input-fields"
    [(model)]="input.value" 
    [format]="input.format" 
    [places]="input.places" 
    [readOnly]="input.readOnly" 
    (modelChange)="dataChange($event, input.value)">
</c-input>
```