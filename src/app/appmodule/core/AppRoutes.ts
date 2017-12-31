import { Routes } from '@angular/router';
import { HomeComponent } from './home/HomeComponent';
import { ComparisonComponent } from './comparison/ComparisonComponent';
import { DetailComponent } from './detail/DetailComponent';
export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'comparison', component: ComparisonComponent, pathMatch: 'full' },
  { path: 'detail', component: DetailComponent, pathMatch: 'full' }

];