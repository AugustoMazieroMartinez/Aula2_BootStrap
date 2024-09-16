import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-apolice',
  templateUrl: './apolice.component.html',
  styleUrls: ['./apolice.component.css'] // Corrigido 'styleUrls'
})
export class ApoliceSeguroComponent {
  nome: string = '';
  sexo: string = '';
  idade: number = 0;
  valorAutomovel: number = 0;
  valorApolice: number = 0;

  calcularApolice() {
    if (this.sexo === 'masculino' && this.idade <= 25) {
      this.valorApolice = this.valorAutomovel * 0.15;
    } else if (this.sexo === 'masculino' && this.idade > 25) {
      this.valorApolice = this.valorAutomovel * 0.10;
    } else if (this.sexo === 'feminino') {
      this.valorApolice = this.valorAutomovel * 0.08;
    }
  }

  // Método opcional para resetar o formulário
  resetForm(form: NgForm) {
    form.resetForm();
    this.valorApolice = 0;
  }
}
