import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameModule } from '../game/game.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        FooterComponent,

    ],
    providers: [
    // {
    //   provide: 'Test',
    //   useValue: 'Best'
    // }
    ],
    exports: [
        HomeComponent,
        HeaderComponent,
        FooterComponent,

    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        GameModule
    ]
})
export class CoreModule { }
