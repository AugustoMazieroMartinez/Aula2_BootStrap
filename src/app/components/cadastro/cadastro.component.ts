import { Cliente } from "./Cliente";
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styleUrl: './cadastro.component.css'
  })

export class CadastroClienteComponent {
    cliente: Cliente = new Cliente();  // Iniciando um novo cliente
    clientes: Cliente[] = [];
  
    adicionarCliente() {
      this.clientes.push({ ...this.cliente });  // Adicionando uma cópia do cliente ao array
      console.log(this.cliente);
      this.cliente = new Cliente();  // Reinicializando o cliente para limpar o formulário
    }
  }
  