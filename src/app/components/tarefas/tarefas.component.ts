import { Component } from '@angular/core';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent {

  tarefas = [
    { descricao: 'Estudar Angular', concluida: false },
    { descricao: 'Ler documentação', concluida: false },
    { descricao: 'Implementar projeto', concluida: false },
    { descricao: 'Revisar código', concluida: false },
    { descricao: 'Escrever testes unitários', concluida: false },
    { descricao: 'Enviar a tarefa', concluída: false}
  ];

  toggleTarefa(tarefa: any) {
    tarefa.concluida = !tarefa.concluida;
  }
}
