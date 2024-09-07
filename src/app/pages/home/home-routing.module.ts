import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { DefaultComponent } from 'src/app/components/default/default.component';
import { OptionsComponent } from 'src/app/components/options/options.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    //declarar los componentes hijos
    children: [
      {
        path: 'default',
        component: DefaultComponent,
      },
      {
        path: 'options',
        component: OptionsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
