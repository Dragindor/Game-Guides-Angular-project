import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AllGamesComponent } from './all-games/all-games.component';
import { NewGameComponent } from './new-game/new-game.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { GameRoutingModule } from './game-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AllGamesComponent,
    NewGameComponent,
    GameDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    GameRoutingModule
  ],
  exports: [
    AllGamesComponent
  ]
})
export class GameModule { }
