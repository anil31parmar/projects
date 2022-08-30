import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { ShowUserDetailComponent } from './show-user-detail/show-user-detail.component';

const routes: Routes = [
  {
  path: 'addUser',
  component: AddUserComponent
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path:'',
    redirectTo:'user-list',
    pathMatch:'full'
  },
  {
    path: 'edit-user/:id',
    component: EditUserComponent
  },
  {
    path: 'show-user-detail/:id',
    component: ShowUserDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
