import { Component, OnInit } from '@angular/core';
import { AF } from '../../providers/af';
import { FirebaseListObservable } from 'angularfire2/database';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public newMessage: String;
  public message: FirebaseListObservable<any>;
  constructor(public afService: AF ) { 
	this.messages = this.afService.messages;
  }

  ngOnInit() {
  }

}
