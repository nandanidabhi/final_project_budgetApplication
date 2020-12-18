import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { AddeditbudgetComponent } from './addeditbudget/addeditbudget.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllocatedbudgetComponent } from './allocatedbudget/allocatedbudget.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'addeditbudget',
    component: AddeditbudgetComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'allocatedbudget',
    component: AllocatedbudgetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
