import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'game',
  pure: false
})
export class GamePipe implements PipeTransform {

  transform(input: Member[], game) {
  let output: Member[] = [];
  if (game === 'allMembers') {
    output = input;
  } else {
    for (let i = 0; i < input.length; i++) {
      if (input[i].favGame === game) {
        output.push(input[i]);
      }
    }
  }
  return output;
}

}
