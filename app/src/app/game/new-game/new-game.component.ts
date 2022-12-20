import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from 'src/app/game/game.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent {

  constructor(
    private gameService: GameService,
    private router: Router
  ) { }

  newGameHandler(form: NgForm): void {
    if (form.invalid) { return; }
    const { title, imageUrl, genres, description, rating, price } = form.value;

    this.gameService.createGame(title, imageUrl, genres, description, rating, price)
      .subscribe(() => {
        this.router.navigate(['/'])
      })
  }
}
