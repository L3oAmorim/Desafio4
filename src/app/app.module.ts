import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // Importar BrowserAnimationsModule
import { MatToolbarModule } from '@angular/material/toolbar';
import { ListaComponent } from './component/lista/lista.component';
import { MatTableModule } from '@angular/material/table';
import { HomeComponent } from './component/home/home.component';
import { HistoricoComponent } from './component/historico/historico.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';  // Apenas o módulo
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    HomeComponent,
    HistoricoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
