import { environment } from './../environments/environment';
//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule, } from 'angularfire2';
import { AngularFireDatabaseModule, } from 'angularfire2/database';
import { AngularFireAuthModule, } from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//Components
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsComponent } from './products/products.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
//Services
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ShoppingCartComponent,
    ProductsComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'shopping-cart',
        component: ShoppingCartComponent,
        canActivate: [AuthGuard]
      },
      { path: 'check-out',
        component: CheckOutComponent,
        canActivate: [AuthGuard]
      },
      { path: 'order-success',
        component: OrderSuccessComponent,
        canActivate: [AuthGuard],
      },
      { path: 'admin/products',
        component: AdminProductsComponent,
        canActivate: [AuthGuard],
      },


      { path: 'admin/orders',
        component: AdminOrdersComponent,
        canActivate: [AuthGuard],
      },
      { path: 'my-orders',
        component: MyOrdersComponent,
        canActivate: [AuthGuard],
      },
    ]),

  ],
  providers: [AuthService,
              AuthGuard,
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
