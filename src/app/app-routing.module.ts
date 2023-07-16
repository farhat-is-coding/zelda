import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { StoreComponent } from './store/store.component';
import { DetailsComponent } from './store/details/details.component';

const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'login', component: UserAuthComponent},
  {path:'store', component: StoreComponent},
  {path:'store/:id', component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
