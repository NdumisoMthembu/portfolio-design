import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {path: '', loadChildren:'./home/home.module#HomeModule'}, 
  {path: 'slider', loadChildren:'./slider/slider.module#SliderModule'}, 
  {path: 'css-waves', loadChildren:'./css-wave/scc-wave.module#CssWaveModule'}, 
  { path: '**', redirectTo: 'not-found' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule],
  declarations: []
})
export class AppRouterModule { }
