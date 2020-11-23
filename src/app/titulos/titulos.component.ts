import { Component, OnInit } from '@angular/core';
import { titulo } from '../model/titulo';

@Component({
  selector: 'spa-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.css']
})
export class TitulosComponent implements OnInit {

  listaTitulos: titulo[] = [
    { competicao: 'Campeonato Brasileiro', quantidade: 2, temporadas: [1959, 1988] },
    { competicao: 'Copa do Nordeste', quantidade: 3, temporadas: [2001, 2002, 2017] },
    { competicao: 'Campeonato Baiano', quantidade: 49, temporadas: [1931,1933,1934,1936,1938,1940,1944,1945,1947,1948,1949,1950,1952,1954,1956,1958,1959,1960,1961,1962,1967,1970,1971,1973,1974,1975,1976,1977,1978,1979,1981,1982,1983,1984,1986,1987,1988,1991,1993,1994,1998,1999,2001,2012,2014,2015,2018,2019,2020] }
  ];

  displayedColumns: string[] = ['competicao', 'quantidade', 'temporadas'];

  constructor() { }

  ngOnInit(): void {
  }

}
