import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScoreboxComponent } from './scorebox/scorebox.component';
import { FrameboxComponent } from './framebox/framebox.component';
import { GameScorecardComponent } from './game-scorecard/game-scorecard.component';
import { GameStorageService } from './game-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    ScoreboxComponent,
    FrameboxComponent,
    GameScorecardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GameStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
