import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent{
  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
  }

  ngOnInit() {

  }

  logout(){
    this.afAuth.auth.signOut();
  }
}
