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
    // this.modelChange.emit(this.data);
  }
  
  @Input() format?: string;
  @Input() places?: number;
  @Input() readOnly: boolean;
  @Input() culture: string = 'en-US';
  
  @Output() public modelChange: EventEmitter<any> = new EventEmitter<any>();

  public data: any;
  private isDirty: boolean = false; 
  
  constructor(private convertor: ConversionService) {
  }

  public ngOnInit() {
  }

  public anounceModelChange(event) {
    if (!this.isDirty) return;
    this.data = this.convertor.convertTo(event.target.innerText, this.format);
    this.modelChange.emit(this.data);
  }

  // public test(event) {
  //   console.log(event);
  //   // .execCommand('selectAll');//, false, null);
  // }
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
    && (event.key != 'Backspace' && event.key != 'Delete' && event.key != '.' && isNaN(event.key)
        && event.key != 'ArrowRight' && event.key != 'ArrowLeft' && event.key != 'ArrowDown' && event.key != 'ArrowUp')) {
        event.preventDefault();
    } else {
      this.isDirty=true;
    }
    if (event.key == 'Enter' || event.key == 'Tab') {
      event.preventDefault();
      event.target.blur();
    }
  }
}
