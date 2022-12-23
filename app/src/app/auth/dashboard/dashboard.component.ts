import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { GameService } from 'src/app/game/game.service';
import { IGame } from 'src/app/shared/interfaces';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  games !: IGame[];
  userId : string | undefined;
  userName: string | undefined;
  isEmpty !: boolean;
  
  constructor(private apiService: ApiService, private authService: AuthService, private gameService: GameService, private router: Router,) {} 

  delete(gameId:string){
    this.gameService.deleteGame(gameId).subscribe({
      next: ()=>{
        this.router.navigate(['/game/all-games'])     
      },
      error: (err) => {console.error(err)}
      
    })}
    
  ngOnInit(): void {
    this.apiService.loadGames().subscribe({
      next:(value) =>{
        this.games = value
        this.userId = this.authService.user?._id.toString()
        this.games = this.games.filter(x => x._ownerId._id.toString() == this.userId).reverse()
        this.userName =this.games[0]._ownerId.username;
        if (this.games.length <=0) {
          this.isEmpty = true;
        } else {
          this.isEmpty = false;
        }
      },
      error: (err) => {console.error(err)}
    })}
  }

