import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';


@NgModule({
  declarations: [TaskComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NzAutocompleteModule

  ]
})
export class TaskModule { }
