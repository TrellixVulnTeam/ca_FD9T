import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListJobsComponent } from './my-list-jobs.component';

describe('MyListJobsComponent', () => {
  let component: MyListJobsComponent;
  let fixture: ComponentFixture<MyListJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyListJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyListJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
