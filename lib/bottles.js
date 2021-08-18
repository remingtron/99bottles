import { capitalize, downTo } from './helpers';

export class Bottles {
  verse(index) {
    const bottles = (count) => {
      if (count === 0) {
        return 'no more bottles';
      }
      return `${count} bottle${count === 1 ? '' : 's'}`;
    }

    const firstLine = () => {
      return `${capitalize(bottles(index))} of beer on the wall, `;
    }

    const secondLine = () => {
      return `${bottles(index)} of beer.\n`;
    }

    const thirdLine = () => {
      if (index === 0) {
        return 'Go to the store and buy some more, ';
      }
      return `Take ${index > 1 ? 'one' : 'it'} down and pass it around, `;
    }

    const fourthLine = () => {
      const nextIndex = index === 0 ? 99 : index - 1;
      return `${bottles(nextIndex)} of beer on the wall.\n`;
    }

    return firstLine(index) +
      secondLine(index) +
      thirdLine(index) +
      fourthLine(index);
  }

  verses(start, end) {
    return downTo(start, end).map(index => this.verse(index)).join('\n');
  }
}
