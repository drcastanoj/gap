import { Routes } from '@angular/router';
import { HomeComponent } from './home/HomeComponent';
import { ComparisonComponent } from './comparison/ComparisonComponent';
export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'comparison', component: ComparisonComponent, pathMatch: 'full' }
];