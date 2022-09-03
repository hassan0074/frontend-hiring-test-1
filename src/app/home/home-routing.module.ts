import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [{ path: '', component: ListingComponent },
{
  path : ':id',
  component : ViewComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
