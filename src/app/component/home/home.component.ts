import { Component, OnInit } from '@angular/core';
import { HistoricoService } from '../../services/historico.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  valorBRL: number = 0;
  valorConvertido: number = 0;
  moedaSelecionada: string = 'USD';
  taxaConversao: number = 0;

  constructor(private historicoService: HistoricoService) { }

  ngOnInit() {
    this.converter();
  }

  converter() {
    if (this.valorBRL <= 0 || isNaN(this.valorBRL)) {
      return;
    }
    this.valorConvertido = this.converterBRLparaMoeda(this.valorBRL, this.moedaSelecionada);
    this.salvarConversao();
  }

  converterBRLparaMoeda(valorBRL: number, codigoMoeda: string): number {
    const taxasConversao: { [codigo: string]: number } = {
      USD : 0.21,
      EUR: 0.18,
      GBP: 0.16,
      JPY: 30.34,
      CHF: 0.18,
      CAD: 0.27,
      ARS: 173.4,
      UYU: 7.53,
      AUD: 0.31,
      DKK: 1.36,
      EGP: 9.44,
    };

    if (taxasConversao[codigoMoeda]) {
      this.taxaConversao = taxasConversao[codigoMoeda];  // Atualiza a taxa de conversão aqui
      return valorBRL * this.taxaConversao;
    } else {
      console.error(`Taxa de conversão não encontrada para ${codigoMoeda}`);
      this.taxaConversao = 0;
      return 0;
    }
  }

  atualizarMoeda(event: any) {
    const codigoMoeda = event.target.value;
    this.moedaSelecionada = codigoMoeda;
    this.converter();
  }

  salvarConversao() {
    const conversao = {
      data: new Date(),
      valorBRL: this.valorBRL,
      valorConvertido: this.valorConvertido,
      moeda: this.moedaSelecionada,
      taxaConversao: this.taxaConversao
    };

    this.historicoService.adicionarConversao(conversao);
    console.log('Conversão salva:', conversao);
  }
}
