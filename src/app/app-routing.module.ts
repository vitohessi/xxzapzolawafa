import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SuiviComponent } from './suivi/suivi.component';
import { LiComponent } from './li/li.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'suivi', component: SuiviComponent},
  {path: 'li', component: LiComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
