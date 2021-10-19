import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouteComponent } from './route/route.component';
import { SearchComponent } from './search/search.component';
import { SigninComponent } from './signin/signin.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {path:'index', component: TaskComponent},
  {path:'checking/:id', component: RouteComponent},
  {path:'search', component: SearchComponent},
  {path:'signin', component: SigninComponent},
  // wildcard 
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
