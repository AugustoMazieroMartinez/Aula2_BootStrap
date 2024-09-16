export class Cliente {
    id: number;
    nome: string;
    email: string;
    idade: number;
  
    constructor(id: number = 0, nome: string = '', email: string = '', idade: number = 0) {
      this.id = id;
      this.nome = nome;
      this.email = email;
      this.idade = idade;
    }
  }  