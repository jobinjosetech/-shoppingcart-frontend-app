import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewAdminProductComponent } from './view-admin-product/view-admin-product.component';

const myRoutes:Routes = [
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"userLogin",
    component:UserLoginComponent
  },
  {
    path:"userReg",
    component:UserRegComponent
  },
  {
    path:"addProduct",
    component:AddProductComponent
  },
  {
    path:"viewAdminProduct",
    component:ViewAdminProductComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserRegComponent,
    AddProductComponent,
    ViewAdminProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
