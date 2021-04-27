import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './components/profile/profile.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ListJobsComponent } from './components/list-jobs/list-jobs.component';
import { CreateJobsComponent } from './components/create-jobs/create-jobs.component';
import { MyListJobsComponent } from './components/my-list-jobs/my-list-jobs.component';
import { LoadingComponent } from './components/loading/loading.component';

const routes: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'add_user', component: AddUserComponent},
  {path: 'list_jobs', component: ListJobsComponent},
  {path: 'create_jobs', component: CreateJobsComponent},
  {path: 'my_list_jobs', component: MyListJobsComponent},
  {path: 'loading', component: LoadingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
