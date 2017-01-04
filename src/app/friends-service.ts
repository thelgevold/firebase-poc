import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Injectable } from '@angular/core';

@Injectable()
export class FriendService {
  constructor(private af: AngularFire) {}

  getFriends(): FirebaseListObservable<any[]> {
    return this.af.database.list('/friends');
  }

  addFriend(friend: string) {
    return this.af.database.list('/friends').push(friend);
  }

  deleteFriend(friend: any) {
    return this.af.database.list('/friends').remove(friend)
  }

}