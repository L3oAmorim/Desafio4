import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Moeda } from '../../Moeda';
import { MatButton } from '@angular/material/button';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit {
    applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

   moedas: Moeda[];
   displayedColumns = ['_id','name','symbol','value'];

   dataSource: MatTableDataSource<Moeda>;


   @ViewChild(MatSort)
  sort: MatSort = new MatSort;

      constructor() {
        this.moedas = [
          { _id: '001', name: 'Real', symbol: 'R$', value: 1},
          { _id: '002', name: 'Dólar Americano', symbol: 'US$', value: 0.21},
          { _id: '003', name: 'Euro', symbol: '€', value: 0.18},
          { _id: '004', name: 'Libra Esterlina', symbol: '£', value: 0.16},
          { _id: '005', name: 'Iene', symbol: '¥', value: 30.34},
          { _id: '006', name: 'Franco Suíço', symbol: 'Fr', value: 0.18},
          { _id: '007', name: 'Dólar Canadense', symbol: 'C$', value: 0.27},
          { _id: '008', name: 'Peso argentino', symbol: '$', value: 173.40},
          { _id: '009', name: 'Peso uruguaio', symbol: '$', value: 7.53},
          { _id: '010', name: 'Dólar Australiano', symbol: 'AU$', value: 0.31},
          { _id: '011', name: 'Coroa dinamarquesa', symbol: '	kr', value: 1.36},
          { _id: '012', name: 'Libra egípcia', symbol: '£', value: 9.44},
        ];
        this.dataSource = new MatTableDataSource(this.moedas);

    }

      ngOnInit(): void {

      }

      ngAfterViewInit() {
        this.dataSource.sort = this.sort;
      }
    }






