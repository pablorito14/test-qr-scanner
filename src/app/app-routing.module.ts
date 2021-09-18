import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScannComponent } from './pages/scann/scann.component';

const routes: Routes = [
  {path: 'scann',component:ScannComponent},
  {path: '**',pathMatch:'full', redirectTo: 'scann'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true,scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
