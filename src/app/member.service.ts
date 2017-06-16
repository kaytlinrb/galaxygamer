import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { MEMBERS } from './mock-members';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.members = database.list('albums');
   }

  getMembers() {
    return this.members;
  }
  getMember(albumId: number){
      for (var i = 0; i <= MEMBERS.length - 1; i++) {
        if (MEMBERS[i].id === albumId) {
          return MEMBERS[i];
        }
      }
    }

}
