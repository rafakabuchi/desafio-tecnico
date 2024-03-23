import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root',
})
export class ListaDeTarefasService {
  private listaDeTarefas: Item[] = [
    {
      id: 1,
      nome: 'Estudar',
      data: 'Segunda-feira às 19:00',
      concluida: false,
    },
    {
      id: 2,
      nome: 'Academia',
      data: 'Terça-feira 20:00',
      concluida: true,
    },
    {
      id: 3,
      nome: 'Faculdade',
      data: 'Quinta-feira às 21:00',
      concluida: false,
    },
  ];
  constructor() {
    console.log('Instanciando dependências necessárias para o serviço.');
  }

  getListaDeItem() {
    return this.listaDeTarefas;
  }

  criarItem(nomeDoItem: string) {
    const id = this.listaDeTarefas.length + 1;
    const item: Item = {
      id: id,
      nome: nomeDoItem,
      data: new Date().toLocaleDateString('pt-BR'),
      concluida: false,
    };
    return item;
  }

  adicionarItemNaLista(nomeDoItem: string) {
    const item = this.criarItem(nomeDoItem);
    this.listaDeTarefas.push(item);
  }

  editarItemDaLista(itemAntigo: Item, nomeEditadoDoItem: string) {
    const itemEditado: Item = {
      id: itemAntigo.id,
      nome: nomeEditadoDoItem,
      data: itemAntigo.data,
      concluida: itemAntigo.concluida,
    };
    const id = itemAntigo.id;
    this.listaDeTarefas.splice(Number(id) - 1, 1, itemEditado);
  }
}
