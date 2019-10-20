import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { ConversionService } from '../helper-services/conversion.service'
@Component({
  selector: 'c-input',
  providers: [],
  styleUrls: ['./custom-input.component.scss'],
  templateUrl: './custom-input.component.html'
})

export class CustomInputComponent implements OnInit{
  @Input()
  public get model() {
    return this.convertor.convertTo(this.data, this.format);
  }
  public set model(value) {
    this.data = this.convertor.convertTo(value, this.format);
    this.modelChange.emit(this.data);
  }
  
  @Input() format?: string;
  @Input() places?: number;
  @Input() readOnly: boolean;
  
  @Output() public modelChange: EventEmitter<number> = new EventEmitter<number>();

  public data: number;
  
  constructor(private convertor: ConversionService) {
  }

  public ngOnInit() {
  }

  public anounceModelChange(event) {
    this.data = this.convertor.convertTo(event.target.innerText, this.format);
    this.modelChange.emit(this.data);
  }

  /*
  keyCodes ::
              96  - 0
              105 - 9
              8   - backspace
              110 - . 
              13  - enter
              9  - tab
  TODO :: Validation for percent and other input validations
  */
  @HostListener('keydown', ['$event']) onKeyup(event) {
    if ((this.format == 'number' || this.format == 'percent')
      && (event.keyCode < 96 && event.keyCode != 8 && event.keyCode != 9) || (event.keyCode > 105 && event.keyCode != 110)) {
        event.preventDefault();
    }
    if (event.keyCode === 13) {
      event.preventDefault();
      event.target.blur();
    }
  }
}
