import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: "",pathMatch: "full",redirectTo: "home"},
  {path:"profile",component: ProfileComponent},
   { path: "home",component: HomeComponent},
   { path: "contact-create",component: ContactCreateComponent},
    {path: "contact-list",component: ContactListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
