import { RouterModule, Routes } from "@angular/router";
import { AllGamesComponent } from "./all-games/all-games.component";
import { GameDetailsComponent } from "./game-details/game-details.component";
import { NewGameComponent } from "./new-game/new-game.component";
import { GameResolver } from "./resolvers/game.resolver";

const routes: Routes = [
 
  {
    path: 'new',
    component: NewGameComponent
  },
  {
    path: 'detail/:id',
    resolve: {
      game: GameResolver
    },
    component: GameDetailsComponent
  },
  {path: 'all-games', component: AllGamesComponent}
];

export const GameRoutingModule = RouterModule.forChild(routes);
