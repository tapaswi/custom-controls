import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'inputFormat' })
export class InputFormatorPipe implements PipeTransform {
  transform(input: any, format?: string, places?: any, culture?: string): string {
    culture = culture || 'en-US';

    switch (format) {
      case 'number': return this.formatToNumber(input, places, culture); 
      case 'percent': return Number(input).toFixed(places) + '%';
      case 'string': return this.formatString(input);
      case 'currency':
      default: break;
    }

    return input.toString();
  }

  private formatToNumber(data, places, culture) {
    let converter: number = 0;
    converter = Math.pow(10, places);
    return Number((Math.round(Number(data) * converter) / converter).toFixed(places))
           .toLocaleString(culture, {minimumFractionDigits: places});
  }

  private formatString(data) {
    if (data == null || data == undefined) { return ''; }
    return data.toString().trim();
  }
}