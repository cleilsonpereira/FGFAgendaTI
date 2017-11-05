import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AF } from "../providers/af";
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/routes';
import { FormsModule } from '@angular/forms';
import { ProductManageComponent } from './product-manage/product-manage.component';
import { ProductsTableComponent } from './products-table/products-table.component';
import { ProductFormComponent } from './product-form/product-form.component';

//Must export the config
export const firebaseConfig = {
	apiKey: 'AIzaSyBPNFiXoYNVZg3jmI_yPIWiTFGP2acPSqY',
	authDomain: 'agenda-ti.firebaseapp.com',
	databaseURL: 'https://agenda-ti.firebaseio.com',
	projectId: 'agenda-ti',
	storageBucket: 'agenda-ti.appspot.com',
	messagingSenderId: '1045975167017'
};
const routes: Routes = [
	{ path: '', component: HomePageComponent },
	{ path: 'login', component: LoginPageComponent }
];

@NgModule({
  declarations: [ AppComponent, LoginPageComponent, HomePageComponent, ProductManageComponent, ProductsTableComponent, ProductFormComponent ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [AF],
  bootstrap: [AppComponent]
})
export class AppModule { }
