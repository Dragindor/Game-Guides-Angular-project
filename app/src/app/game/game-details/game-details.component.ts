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
  // user!: IUser;
  // errorFetcingData: boolean = false;
  
  constructor(private apiService: ApiService,private activatedRoute: ActivatedRoute) {
    this.game = this.activatedRoute.snapshot.data?.['game'];
    console.log(this.activatedRoute.snapshot.data?.['game']);
    
  }

  ngOnInit(): void {   
  }
}