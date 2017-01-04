import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

import { FormsModule } from '@angular/forms';
import { FriendService } from './friends-service';

export const firebaseConfig = {
  apiKey: "[your apiKey]",
  authDomain: "[your authDomain]",
  databaseURL: "[your databaseURL]",
  storageBucket: "[your storageBucket]",
  messagingSenderId: "[your messagingSenderId]"
};

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: [ FriendService ]
})
export class AppModule {}