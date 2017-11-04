// src/app/providers/af.ts
import {Injectable} from "@angular/core";
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
@Injectable()
export class AF {

	public agendaTi: FirebaseListObservable<any>;
	public users: FirebaseListObservable<any>;
	public nome: string;
	public local: string;
	constructor(public af: AngularFire) {
		this.agendaTi = this.af.database.list('agendaTi');
	}
	/**
	 * Logs in the user
	 * @returns {firebase.Promise<FirebaseAuthState>}
	 */
	loginWithGoogle() {
		return this.af.auth.login({
			providers: AuthProviders.Google,
			method: AuthMethods.Popup,
		});
	}
	/**
	 * Logs out the current user
	 */
	logout() {
		return this.af.auth.logout();
	}
	/**
	 * Saves a message to the Firebase Realtime Database
	 * @param text
	 */
	sendMessage(text) {
		var message = {
			id: text,
			nome: this.nome,
			local: this.local,
			descricao: text,
			data: text
		};
		this.agendaTi.push(message);
	}
}
