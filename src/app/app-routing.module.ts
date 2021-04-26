import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EarthquakeTableComponent} from './earthquake-table/earthquake-table/earthquake-table.component';

const routes: Routes = [
  { path: '', component: EarthquakeTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
