import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../model/pessoa.model';

@Component({
  selector: 'app-saude-mental',
  templateUrl: './saude-mental.page.html',
  styleUrls: ['./saude-mental.page.scss'],
})
export class SaudeMentalPage implements OnInit {
  model = {} as Pessoa;
  idBusca: number; 
  saudeMentalBusca: number;

  constructor() { }

  ngOnInit() {
  }

}
