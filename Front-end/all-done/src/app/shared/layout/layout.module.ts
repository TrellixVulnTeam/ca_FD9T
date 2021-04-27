import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  FlexLayoutModule,
  MatCardModule,
  MatStepperModule,
  MatRadioModule,
  MatCheckboxModule,
  MatTabsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatProgressSpinnerModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: [
    ...MODULES
  ]
})
export class LayoutModule { }
