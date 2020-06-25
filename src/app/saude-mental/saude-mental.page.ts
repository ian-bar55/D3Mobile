import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../model/pessoa.model';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-saude-mental',
  templateUrl: './saude-mental.page.html',
  styleUrls: ['./saude-mental.page.scss'],
})


export class SaudeMentalPage implements OnInit {
  model = {} as any;
  idBusca: number; 
  saudeMentalBusca: number;
  racaBusca: string;

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
  }
  buscarPorRaca(){
    this.pessoaService.getPessoaByRaca(this.racaBusca);
  }
  buscarPorId(){
    this.pessoaService.getPessoaById(this.idBusca);
  }
  buscarPorSaudeMental(){
    this.pessoaService.getPessoaBySaudeMental(this.saudeMentalBusca);
  }
  insertPessoa(){
    this.pessoaService.insertPessoa(this.model);
  }
}
