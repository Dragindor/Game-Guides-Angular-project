import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { AppRountingModule } from './app-rounting.module';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MyModule } from './my-module';
import { appInterceptorProvider } from './app.interceptor';
import { API_ERROR } from './shared/constants';
import { BehaviorSubject } from 'rxjs';
import { GameModule } from './game/game.module';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticateComponent,
  ],
  imports: [
    BrowserModule,
    AppRountingModule,
    CoreModule,
    GameModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    MyModule.withProviders()
  ],
  providers: [
    appInterceptorProvider,
    {
      provide: API_ERROR,
      useValue: new BehaviorSubject(null)
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
