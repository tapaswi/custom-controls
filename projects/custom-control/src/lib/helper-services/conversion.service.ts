import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ConversionService {
    constructor() { }

    public convertTo(data: any, format: string) {
        let dataToReturn: any;
        switch (format) {
            case 'number': 
            case 'percent': dataToReturn = this.convertToNumber(data); break;
            case 'string': dataToReturn = this.convertToString(data); break;
            default: dataToReturn = this.convertToString(data); break;
        }
        return dataToReturn;
    }

    private convertToNumber(data): Number {
        if (data == null) { return 0; }
        let dataToString = data.toString();
        let dataToNumber = dataToString.replace(/[,’%CHF/m²']/g, '').replace(/\s/g, '').trim();
        return Number(dataToNumber);
    }

    private convertToString(data): string {
        if (data == null || data == undefined) { return ''; }
        let dataToString = data.toString().trim();
        return dataToString;
    }
}
