import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoliticaDePrivacidadePage } from './politica-de-privacidade.page';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: PoliticaDePrivacidadePage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PoliticaDePrivacidadePage]
})
export class PoliticaDePrivacidadePageModule {}
