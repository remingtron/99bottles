import { downTo } from './helpers';

export class Bottles {
  verse(index) {
    const bottles = (count) => {
      if (count === 0) {
        return 'no more bottles';
      }
      return `${count} bottle${count === 1 ? '' : 's'}`;
    }

    return `${bottles(index)} of beer on the wall, ` +
      `${bottles(index)} of beer.\n` +
      `Take ${index > 1 ? 'one' : 'it'} down and pass it around, ` +
      `${bottles(index-1)} of beer on the wall.\n`;
  }
}
