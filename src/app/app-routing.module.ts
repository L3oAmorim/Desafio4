import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ListaComponent } from './component/lista/lista.component';
import { HistoricoComponent } from './component/historico/historico.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'lista', component: ListaComponent},
  { path: 'historico', component: HistoricoComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
