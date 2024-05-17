import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {
  private historico: Array<{
    data: Date,
    valorBRL: number,
    valorConvertido: number,
    moeda: string,
    taxaConversao: number
  }> = [];

  adicionarConversao(conversao: {
    data: Date,
    valorBRL: number,
    valorConvertido: number,
    moeda: string,
    taxaConversao: number
  }) {
    this.historico.push(conversao);
    console.log('Conversão adicionada:', conversao);
  }

  obterHistorico() {
    return this.historico;
  }

  excluirConversao(index: number) {
    if (index > -1 && index < this.historico.length) {
      this.historico.splice(index, 1);
    }
  }
}
