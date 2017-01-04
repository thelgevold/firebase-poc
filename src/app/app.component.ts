import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { FriendService } from './friends-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  name: string;
  
  constructor(private friendService: FriendService) {}

  ngOnInit() {
    this.items = this.friendService.getFriends();
  }

  add() {
    this.friendService.addFriend(this.name);
    this.name = '';
  }

  remove(friend) {
    this.friendService.deleteFriend(friend)
  }
}