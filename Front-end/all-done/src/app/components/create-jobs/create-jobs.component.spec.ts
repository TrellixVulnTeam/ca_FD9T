import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '@auth0/auth0-angular';

import { CreateJobsComponent } from './create-jobs.component';

describe('CreateJobsComponent', () => {
  let component: CreateJobsComponent;
  let fixture: ComponentFixture<CreateJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AuthModule.forRoot({
          domain: 'conseil-alliance.eu.auth0.com',
          clientId: 'KJ9lkqhatRPsX6zTIEAIqK64WlsyOgJd'
        }),
        HttpClientModule,
        ReactiveFormsModule],
      declarations: [ CreateJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
