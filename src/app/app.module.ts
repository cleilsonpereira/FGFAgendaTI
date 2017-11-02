import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
//Must export the config
export const firebaseConfig = {
	apiKey: 'AIzaSyBPNFiXoYNVZg3jmI_yPIWiTFGP2acPSqY',
	authDomain: 'agenda-ti.firebaseapp.com',
	databaseURL: 'https://agenda-ti.firebaseio.com',
	storageBucket: 'agenda-ti.appspot.com',
	messagingSenderId: '1045975167017'
};

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
