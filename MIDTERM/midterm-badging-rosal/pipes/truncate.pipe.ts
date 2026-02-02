import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(text: string, limit: number = 80): string {
    if (!text) return '';
    return text.length > limit ? text.slice(0, limit) + '...' : text;
  }
}
