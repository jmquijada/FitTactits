import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlimentoFavPageRoutingModule } from './alimento-fav-routing.module';

import { AlimentoFavPage } from './alimento-fav.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlimentoFavPageRoutingModule
  ],
  declarations: [AlimentoFavPage]
})
export class AlimentoFavPageModule {}
