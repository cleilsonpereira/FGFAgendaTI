// src/app/providers/af.ts
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { enviroment } from '../enviroments/enviroment';

import * as firebase from 'firebase/agenda-de-ti';
@Injectable()
export class AF {
	
	user: Observable<firebase.User>;
	items: FirebaseListObservable<any[]>;
	constructor(afAuth: AngularFireAuth, db: AngularFireDatabase) {
		this.user = afAuth.authState;
		this.items = db.list('items');
	}
	login(){
		this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
	}
	logout() {
		this.afAuth.auth.signout();
	}
	

}
