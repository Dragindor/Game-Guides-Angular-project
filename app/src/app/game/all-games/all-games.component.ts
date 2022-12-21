import { Component, OnInit } from '@angular/core';
import { IGame } from '../../shared/interfaces/game';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.scss']
})
export class AllGamesComponent implements OnInit{

  gameList: IGame[] | null = null;
  errorFetcingData = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.loadGames().subscribe({
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

