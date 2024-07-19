import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyoneComponent } from './lazyone/lazyone.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: "", component: LazyoneComponent }
]

@NgModule({
  declarations: [
    LazyoneComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [

  ]
})
export class LazyoneModule { }
