import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BubblesComponent } from './bubbles/bubbles.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { GenderChartComponent } from './gender-chart/gender-chart.component';
import { OsChartComponent } from './os-chart/os-chart.component';


const routes: Routes = [
  {path: "index", component: BubblesComponent},
  {path: "signin", component: SignInComponent},
  {path: "chart", component: GenderChartComponent},
  {path: "deviceChart", component: OsChartComponent},
  {path: "**", redirectTo: "index", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
