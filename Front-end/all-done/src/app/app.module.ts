import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

import { LayoutModule } from './shared/layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TopbarComponent } from './shared/components/topbar/topbar.component';
import { SidenavDefaultComponent } from './shared/components/sidenav-default/sidenav-default.component';

import { SidenavComponent } from './shared/components/sidenav/sidenav.component';
import { HttpService } from './shared/services/http.service';
import { ProfileComponent } from './components/profile/profile.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ListJobsComponent } from './components/list-jobs/list-jobs.component';
import { CreateJobsComponent } from './components/create-jobs/create-jobs.component';
import { MyListJobsComponent } from './components/my-list-jobs/my-list-jobs.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidenavDefaultComponent,
    SidenavComponent,
    ProfileComponent,
    AddUserComponent,
    ListJobsComponent,
    CreateJobsComponent,
    MyListJobsComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    LayoutModule,
    HttpClientModule,
    ReactiveFormsModule,

    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'conseil-alliance.eu.auth0.com',
      clientId: 'KJ9lkqhatRPsX6zTIEAIqK64WlsyOgJd'
    }),
    
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
