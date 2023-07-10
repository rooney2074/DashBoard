import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ExampleComponent } from './example/example.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
  path:'dashboard',component:DashboardComponent
  },
  {
  path:'about',component:AboutComponent
  },{
    path:'example',component:ExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
