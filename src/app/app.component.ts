import { Component } from '@angular/core';
import { BowlingGame } from 'src/data/BowlingGame';
import { GameStorageService } from './game-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyBowlingScore';

  public ActiveGame: BowlingGame;
  public Games: BowlingGame[];

  pinsKnockedDown: number;

  constructor(private gameService: GameStorageService) {}

  ngOnInit() {
    this.pinsKnockedDown = 0;
    this.gameService.Games.subscribe(games => {
      if (games != null) {
        this.ProcessNewGames(games);
      }
    });
  }

  ProcessNewGames(games: BowlingGame[]) {
    this.Games = games;
  }

  UpdatePinValue(newValue) {
    this.pinsKnockedDown = parseInt(newValue);
  }

  SaveThrow() {
    this.gameService.SaveThrow(this.pinsKnockedDown);
  }
}