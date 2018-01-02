import { Pipe, PipeTransform } from '@angular/core';

/**
 *  tranform a  map in a object list with structure { key:string, value: object} 
 */
@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
  public transform(value: { [key: string]: Object }): Array<Object> {
    const keys: Array<{ key: string; value: Object }> = [];
    for (const key in value) {
      keys.push({ key: key, value: value[key] });
    }
    return keys;
  }
}