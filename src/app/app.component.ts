import { Component } from '@angular/core';
import { AF } from "../providers/af";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  public is LoggedIn: boolean;
  constructor(public afService: AF, private router: Router) {
	// This asynchronously checks if our user is logged it and will automatically
	// redirect them to the Login page when the status changes.
	// This is just a small thing that Firebase does that makes it easy to use.
	this.afService.af.auth.subscribe(
		(auth) => {
			if(auth == null) {
				console.log("Not Logged in.");
				this.isLoggedIn = false;
				this.router.navigate(['login']);
			}
			else {
				console.log("Sucessfully Logged in.");
				// Set the Display Name and Email so we can attribute messages to them
				// variaeveis alteradas afService .nome and .local provider
				this.afService.nome = auth.google.nome;
				this.afService.local = auth.google.local;
				this.isLoggedIn = true;
				this.router.navigate(['']);
			}
		}
	);
  }
  logout() {
	this.afService.logout();
  }
}
