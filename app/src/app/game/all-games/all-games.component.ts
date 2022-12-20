import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { IGame } from '../../shared/interfaces/game';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.scss']
})
export class AllGamesComponent implements OnInit{

  gameList: IGame[] | null = null;
  errorFetcingData = false;

  constructor(private GameService: GameService) { }

  ngOnInit(): void {
    this.GameService.getGames().subscribe({
      next: (value) => {
        this.gameList = value;
      },
      error: (err) => {
        this.errorFetcingData = true;
        console.error(err);
      }
    });
  }
}

