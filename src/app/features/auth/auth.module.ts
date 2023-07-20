import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

// Material modules for components XD
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
// Forms
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Import routing module
import { AuthRoutingModule } from './auth-routing.module';

// Service
import { LoginService } from './service/login.service';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [LoginService],
})
export class AuthModule { }
