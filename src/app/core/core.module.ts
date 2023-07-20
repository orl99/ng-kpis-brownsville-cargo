import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Compoents
import { ToolBarMenuComponent } from './components/tool-bar-menu/tool-bar-menu.component';
// Angular Material Modules
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';


@NgModule({
  declarations: [ToolBarMenuComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatRippleModule
  ],
  exports: [
    ToolBarMenuComponent
  ]
})
export class CoreModule { }
