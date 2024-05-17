import { Component, OnInit } from '@angular/core';
import { HistoricoService } from '../../services/historico.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  historico: Array<{
    data: Date,
    valorBRL: number,
    valorConvertido: number,
    moeda: string,
    taxaConversao: number
  }> = [];
  exibirAltoValor: boolean = false;
  valorAlto: number = 10000;

  constructor(private historicoService: HistoricoService) { }

  ngOnInit() {
    this.historico = this.historicoService.obterHistorico();
  }

  alternarExibicaoAltoValor() {
    this.exibirAltoValor = !this.exibirAltoValor;
  }

  excluirConversao(index: number) {
    this.historicoService.excluirConversao(index);
    this.historico = this.historicoService.obterHistorico();
  }
}
