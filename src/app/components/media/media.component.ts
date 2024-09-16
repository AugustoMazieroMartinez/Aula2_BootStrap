import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrl: './media.component.css'
})

export class MediaAlunoComponent {
    ac1: number = 0;
    ac2: number = 0;
    ag: number = 0;
    af: number = 0;
    media: number = 0;
    status: string = '';
  
    calcularMedia() {
      this.media = (this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45);
      this.status = this.media > 5 ? 'Aprovado' : 'Reprovado';
    }
  }
  