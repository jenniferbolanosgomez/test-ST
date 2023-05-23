import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditAnimalComponent } from './componentes/add-edit-animal/add-edit-animal.component';
import { ListAnimalsComponent } from './componentes/list-animals/list-animals.component';
import { SeeAnimalComponent } from './componentes/see-animal/see-animal.component';

const routes: Routes = [

{path: 'animals' , component: ListAnimalsComponent},
{path: 'sellanimal/:id' , component: SeeAnimalComponent},
{path: 'addanimal' , component: AddEditAnimalComponent},
{path: 'editanimal/:id' , component: AddEditAnimalComponent},
{path: '**', redirectTo: '/'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
