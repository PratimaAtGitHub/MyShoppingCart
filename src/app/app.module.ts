import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { WelcomeComponent } from './home/welcome.component';
import { HttpClient } from 'selenium-webdriver/http';
import { StartComponent } from './shared/star.component';
import { ProductService } from './products/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    WelcomeComponent,
    StartComponent
    HttpClient  
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
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
