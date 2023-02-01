import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { InterestComponent } from './interest/interest.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { SmartSubComponent } from './smart-sub/smart-sub.component';



const routes: Routes = [
  {path:"add",component:AddComponent},
  {path:"smartsub",component:SmartSubComponent},
  {path:"interest",component:InterestComponent},
  {path:"multiplication",component:MultiplicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
