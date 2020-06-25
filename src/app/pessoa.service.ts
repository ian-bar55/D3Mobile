import { Injectable } from '@angular/core';
import { Pessoa } from './model/pessoa.model';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private pessoas = [] as Pessoa[];

  constructor(private storage: Storage, private datePipe: DatePipe) { }

  async insertPessoa(model: any){
    let pessoa: Pessoa;
    pessoa.id = model.id;
    pessoa.idade = model.idade;
    pessoa.nome = model.nome;
    pessoa.saudeMental = model.saudeMental;
    pessoa.racaCor = model.racaCor;
    this.pessoas.push(pessoa);
    await this.storage.set("pessoas",this.pessoas);
  }
  async getPessoaById(id: number){
    let arrayPessoas = await this.storage.get("pessoas");
    console.log('PESSOA COM O ID PESQUISADO:\n' + arrayPessoas.find(x => x.id === id));
  }
  async getPessoaByRaca(racaCor: string){
    let arrayPessoas = await this.storage.get("pessoas");
    let pessoasPorRaca = [];
    arrayPessoas.forEach(p => {
      if (p.racaCor === racaCor) {pessoasPorRaca.push(p)};
    });
    console.log('PESSOAS COM A COR/RAÇA PESQUISADA:\n' + pessoasPorRaca);
  }
  async getPessoaBySaudeMental(saudeMental: number){
    let arrayPessoas = await this.storage.get("pessoas");
    let pessoasPorSaudeMental = [];
    arrayPessoas.forEach(p => {
      if (p.saudeMental === saudeMental) {pessoasPorSaudeMental.push(p)};
    });
    console.log('PESSOAS COM A SAÚDE MENTAL PESQUISADA:\n' + pessoasPorSaudeMental);
  }
}
