import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaytwoComponent } from './laytwo/laytwo.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: LaytwoComponent }
]


@NgModule({
  declarations: [
    LaytwoComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class LazytwoModule { }
