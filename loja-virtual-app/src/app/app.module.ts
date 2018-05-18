import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { ProdutoComponent } from './produto/produto.component';
import { ViewProdutoComponent } from './produto/view-produto.component';
import { ListaProdutoComponent } from './produto/lista-produto.component';
import { routing } from './app.routing';
import { ClienteComponent } from './cliente/cliente.component';
import { ListaClienteComponent } from './cliente/lista-cliente.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { HomeComponent } from './home/home.component';
import { ListaCategoriaComponent } from './categoria/lista-categoria.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { ViewCategoriaComponent } from './categoria/view-categoria.component';
import { ViewClienteComponent } from './cliente/view-cliente.component';
import { ListaFornecedorComponent } from './fornecedor/lista-fornecedor.component';
import { ViewFornecedorComponent } from './fornecedor/view-fornecedor.component';
import { ProdutoDescricaoPipe } from './produto/produto-descricao.pipe';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { AuthGuardService } from './guards/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ProdutoComponent,
    ViewProdutoComponent,
    ListaProdutoComponent,
    ClienteComponent,
    ListaClienteComponent,
    CategoriaComponent,
    HomeComponent,
    ListaCategoriaComponent,
    FornecedorComponent,
    ViewCategoriaComponent,
    ViewClienteComponent,
    ListaFornecedorComponent,
    ViewFornecedorComponent,
    LoginComponent,
    ProdutoDescricaoPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    routing
  ],
  exports: [
    ProdutoComponent,
    ViewProdutoComponent,
    ListaProdutoComponent
  ],
  providers: [LoginService, AuthGuardService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
