import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { TemplateComponent } from './admin/template/template.component';
import { routing } from './app.routing';
import { HomeComponent } from './admin/home/home.component';
import { ProdutoDescricaoPipe } from './admin/produto/produto-descricao.pipe';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { LoginService } from './admin/login/login.service';
import { AuthGuardService } from './admin/guards/auth-guard.service';
import { ProdutoModule } from './admin/produto/produto.module';
import { HomeModule } from './admin/home/home.module';
import { CategoriaModule } from './admin/categoria/categoria.module';
import { FornecedorModule } from './admin/fornecedor/fornecedor.module';
import { ClienteModule } from './admin/cliente/cliente.module';
import { MenuInicioComponent } from './loja/menu-inicio/menu-inicio.component';
//import { CustomMaterialModule } from './loja/custom-material.module';
import {ProdutoDetalheModule} from './loja/produto-detalhe/produto-detalhe.module';


@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    LoginComponent,
    ProdutoDescricaoPipe,
    MenuInicioComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    routing,
    ProdutoModule,
    CategoriaModule,
    FornecedorModule,
    ClienteModule,
    HomeModule,
//    CustomMaterialModule,
    ProdutoDetalheModule
  ],
  exports: [],
  providers: [LoginService, AuthGuardService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
