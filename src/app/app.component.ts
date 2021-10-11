import { Component } from '@angular/core';
import { GameResult } from 'src/data/GameResult';
import { GameStorageService } from './game-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyBowlingScore';

  public ActiveGame: GameResult;

  constructor(private gameService: GameStorageService) {}

  ngOnInit() {
    this.gameService.ActiveGame.subscribe(game => {
      if (game != null) {
        this.ActiveGame = game;
      }
    });
  }
}