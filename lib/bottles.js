import { downTo } from './helpers';

export class Bottles {
  verse(index) {
    return `${index} bottles of beer on the wall, ` +
      `${index} bottles of beer.\n` +
      'Take one down and pass it around, ' +
      `${index-1} bottle${index-1 > 1 ? 's' : ''} of beer on the wall.\n`;
  }
}
