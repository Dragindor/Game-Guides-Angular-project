import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGame } from '../../shared/interfaces/game';


@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})

export class GameDetailsComponent {

  game : IGame;
  
  constructor(private activatedRoute: ActivatedRoute) {
    this.game = this.activatedRoute.snapshot.data?.['game'];
    console.log(this.activatedRoute.snapshot.data?.['game']);
    
  }

  ngOnInit(): void {
    
  }
}