import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { ContentComponent } from './components/content/content.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { TestComponent } from './components/test/test.component';
import { ApoliceSeguroComponent } from './components/apolice/apolice.component';
import { CadastroClienteComponent } from './components/cadastro/cadastro.component';
import { MediaAlunoComponent } from './components/media/media.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { TarefasComponent } from './components/tarefas/tarefas.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ContentComponent,
    RodapeComponent,
    TestComponent,
    ApoliceSeguroComponent,
    CadastroClienteComponent,
    MediaAlunoComponent,
    CalculadoraComponent,
    TarefasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
