import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
// import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { WelcomeComponent } from './home/welcome.component';
import { HttpClient } from 'selenium-webdriver/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    WelcomeComponent,
    // RouterModule
  ],
  imports: [
    BrowserModule,
    FormsModule
    // RouterModule.forRoot([
    //   { path: 'products', component: ProductListComponent },
    //   // { path: 'products/:id', component: ProductDetailComponent },
    //   { path: 'welcome', component: WelcomeComponent },
    //   { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    //   { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    //]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
