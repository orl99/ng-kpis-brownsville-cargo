import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

// Material Modules
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';

// Shared module
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [MainDashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    SharedModule,
    MatTabsModule
  ]
})
export class DashboardModule { }
