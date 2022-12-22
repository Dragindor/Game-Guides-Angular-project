import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { IUser } from 'src/app/shared/interfaces';
import { IGame } from '../../shared/interfaces/game';


@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})

export class GameDetailsComponent {

  game : IGame;
  games !: IGame[];
  user : IUser | undefined;
  username: string | undefined
  // errorFetcingData: boolean = false;
  
  constructor(private apiService: ApiService,private activatedRoute: ActivatedRoute) {
    this.game = this.activatedRoute.snapshot.data?.['game'];
    this.apiService.loadGames().subscribe({
      next:(value) =>{
        this.games = value
        this.games = this.games.filter(x => x._id.toString() == this.game._id)
        this.username =this.games[0]._ownerId.username;
      },
      error: (err) => {console.error(err)}
    })
    
  }
  
  ngOnInit(): void {   
  }
}