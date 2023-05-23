import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SeeAnimalComponent } from './componentes/see-animal/see-animal.component';
import { ListAnimalsComponent } from './componentes/list-animals/list-animals.component';
import { AddEditAnimalComponent } from './componentes/add-edit-animal/add-edit-animal.component';
import { AlertaComponent } from './componentes/alerta/alerta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SeeAnimalComponent,
    ListAnimalsComponent,
    AddEditAnimalComponent,
    AlertaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
