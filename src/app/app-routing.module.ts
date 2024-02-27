import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home/home',component:HomeComponent,canActivate:[AuthGuard]},
  { path: '**', component: PageNotFoundComponent }
  // {path:'home/UserList',component:UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
