import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AllGamesComponent } from './all-games/all-games.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { GameDetailsComponent } from './game-details/game-details.component';

const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'all-games', component: AllGamesComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'game-details', component: GameDetailsComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRountingModule { }
