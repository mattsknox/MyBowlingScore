import { Component, OnInit, Input } from '@angular/core';
import { BowlingGame } from 'src/data/BowlingGame';
import { GameStorageService } from '../game-storage.service';

@Component({
  selector: 'game-scorecard',
  templateUrl: './game-scorecard.component.html',
  styleUrls: ['./game-scorecard.component.scss']
})
export class GameScorecardComponent implements OnInit {

  @Input()
  public Game: BowlingGame;
  public GameScore: number;

  constructor(private gameService: GameStorageService) { 

  }

  ngOnInit() {
    this.GameScore = this.Game.Score();
  }

}
