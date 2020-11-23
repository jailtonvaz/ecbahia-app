import { Component, OnInit } from '@angular/core';
import { artilheiro } from '../model/artilheiro';

@Component({
  selector: 'spa-artilheiro',
  templateUrl: './artilheiro.component.html',
  styleUrls: ['./artilheiro.component.css']
})
export class ArtilheiroComponent implements OnInit {

  listaArtilheiros: artilheiro[] = [
    { posicao: 1, jogador: 'Carlito', quantidadeGols: 253 },
    { posicao: 2,  jogador: 'Douglas', quantidadeGols: 211 },
    { posicao: 3, jogador: 'Hamílton', quantidadeGols: 154},
    { posicao: 4, jogador: 'Uéslei',	quantidadeGols: 140},
    { posicao: 5, jogador: 'Osni',	quantidadeGols: 138},
    { posicao: 6, jogador: 'Marcelo Ramos',	quantidadeGols: 128},
    { posicao: 7, jogador: 'Nonato', quantidadeGols: 125},
    { posicao: 8, jogador: 'Vareta',	quantidadeGols: 121},
    { posicao: 9, jogador: 'Alencar', quantidadeGols: 116},
    { posicao: 10, jogador: 'Biriba', quantidadeGols: 113}
  ];

  displayedColumns: string[] = [ 'posicao', 'jogador', 'quantidadeGols'];

  constructor() { }

  ngOnInit(): void {
  }

}
