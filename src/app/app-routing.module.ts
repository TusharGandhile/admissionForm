import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmissionFormComponent } from './addmission-form/addmission-form.component';
import { DisplaylistComponent } from './displaylist/displaylist.component';
import { EditFormComponent } from './edit-form/edit-form.component';

const routes: Routes = [
  {path:'',component:AddmissionFormComponent},
  {path:'admission',component:AddmissionFormComponent},
  {path:'displayList',component:DisplaylistComponent},
  {path:'editform/:id',component:EditFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
