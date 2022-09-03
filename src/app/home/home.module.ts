import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ListingComponent } from './listing/listing.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { ApiService } from '../services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    ListingComponent,
    HeaderComponent,
    TableComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers : [
    ApiService
  ]
})
export class HomeModule { }
