import { Component, OnInit, Input } from '@angular/core';
import { GameResult } from 'src/data/GameResult';
import { GameStorageService } from '../game-storage.service';

@Component({
  selector: 'game-scorecard',
  templateUrl: './game-scorecard.component.html',
  styleUrls: ['./game-scorecard.component.scss']
})
export class GameScorecardComponent implements OnInit {

  public ActiveGame: GameResult;
  public GameScore: number;

  constructor(private gameService: GameStorageService) { }

  ngOnInit() {
    this.gameService.ActiveGame.subscribe(game => {
      if (game != null) {
        this.ProcessNewGameData(game);
      }
    });
  }

  ProcessNewGameData(game: GameResult) {
    this.GameScore = game.Score();
    this.ActiveGame = game;
  }

}
