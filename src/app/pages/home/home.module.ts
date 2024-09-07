import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { DefaultComponent } from 'src/app/components/default/default.component';
import { OptionsComponent } from 'src/app/components/options/options.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage, DefaultComponent, OptionsComponent],
})
export class HomePageModule {}
