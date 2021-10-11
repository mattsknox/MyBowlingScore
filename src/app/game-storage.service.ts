import { Injectable } from '@angular/core';
import { GameResult } from '../data/GameResult';
import { Frame } from 'src/data/Frame';

import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class GameStorageService {

  public ActiveGame: BehaviorSubject<GameResult> 
    = new BehaviorSubject<GameResult>(null);


  constructor() {
    let gameDate = new Date(Date.parse("2021-10-09 00:00:01"));
    let frames = [
      new Frame([ 4 , 3 ]),
      new Frame([ 7 , 3 ]),
      new Frame([ 5 , 2 ]),
      new Frame([ 8 , 1 ]),
      new Frame([ 4 , 6 ]),
      new Frame([ 2 , 4 ]),
      new Frame([ 8 , 0 ]),
      new Frame([ 8 , 0 ]),
      new Frame([ 8 , 2 ]),
      new Frame([ 10 , 1, 7 ])
    ];

    let activeGame: GameResult = 
      new GameResult(frames, gameDate);

    this.ActiveGame.next(activeGame);
  }

}
