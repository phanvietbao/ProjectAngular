import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductinfoComponent } from './Components/productinfo/productinfo.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import{BrowserAnimationsModule}  from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { NgxPaginationModule } from 'ngx-pagination';
import { WebApiService } from './web-api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './shared/filter.pipe';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { AdminComponent } from './Components/admin/admin.component';

import { TrackDetailsComponent } from './Components/track-details/track-details.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { RouterModule } from '@angular/router';
import { Authinterceptor } from './auth/auth.interceptor';
import { CheckoutComponent } from './checkout/checkout.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { HomeAdminComponent } from './Components/home-admin/home-admin.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductinfoComponent,
    HeaderComponent,
    FooterComponent,
    FilterPipe,
    WishlistComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,

    TrackDetailsComponent,
    CheckoutComponent,
    AboutComponent,
    ContactComponent,
    AddProductComponent,
    HomeAdminComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    MatCardModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    HttpClientModule,
   NgxSkeletonLoaderModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatSlideToggleModule,

  ],
  providers: [WebApiService,{
    provide: HTTP_INTERCEPTORS,
    useClass: Authinterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
